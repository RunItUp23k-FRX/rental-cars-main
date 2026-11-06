import { show } from '@/actions/App/Http/Controllers/OrderController';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatCurrency, RecentOrder } from '@/pages/dashboard';
import { Link } from '@inertiajs/react';
import { Eye } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const getStatusBadge = (status: string) => {
    const statusConfig: Record<
        string,
        {
            variant: 'default' | 'secondary' | 'destructive' | 'outline';
            label: string;
        }
    > = {
        pending: { variant: 'outline', label: 'En attente' },
        confirmed: { variant: 'default', label: 'Confirmée' },
        active: { variant: 'secondary', label: 'Active' },
        completed: { variant: 'default', label: 'Terminée' },
        cancelled: { variant: 'destructive', label: 'Annulée' },
    };

    const config = statusConfig[status] || {
        variant: 'outline',
        label: status,
    };
    return <Badge variant={config.variant}>{config.label}</Badge>;
};

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-MA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

interface TableDataProps {
    recentOrders: RecentOrder[];
}

const TableData = ({ recentOrders }: TableDataProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Véhicule</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Montant</TableHead>
                    <TableHead className="text-right">Solde Dû</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recentOrders.length === 0 ? (
                    <TableRow>
                        <TableCell
                            colSpan={8}
                            className="text-center text-muted-foreground"
                        >
                            Aucune commande pour le moment
                        </TableCell>
                    </TableRow>
                ) : (
                    recentOrders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell className="font-medium">
                                #{order.id}
                            </TableCell>
                            <TableCell>{order.client_name}</TableCell>
                            <TableCell>{order.vehicle}</TableCell>
                            <TableCell className="whitespace-nowrap">
                                <div className="flex flex-col text-xs">
                                    <span>{formatDate(order.pickup_date)}</span>
                                    <span className="text-muted-foreground">
                                        → {formatDate(order.drop_date)}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                {getStatusBadge(order.status)}
                            </TableCell>
                            <TableCell className="text-right font-medium">
                                {formatCurrency(order.total_price)}
                            </TableCell>
                            <TableCell className="text-right">
                                {order.solde_du > 0 ? (
                                    <span className="font-medium text-orange-600">
                                        {formatCurrency(order.solde_du)}
                                    </span>
                                ) : (
                                    <span className="text-green-600">Payé</span>
                                )}
                            </TableCell>
                            <TableCell className="text-right">
                                <Link
                                    href={show.url({
                                        order: order.id,
                                    })}
                                >
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                    >
                                        <Eye className="size-4" />
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
};

export default TableData;
