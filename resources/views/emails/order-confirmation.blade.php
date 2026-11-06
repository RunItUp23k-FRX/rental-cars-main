<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation - Aguinane Cars</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
            line-height: 1.6;
        }

        .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 28px;
            margin-bottom: 5px;
        }

        .header p {
            font-size: 14px;
            opacity: 0.9;
        }

        .content {
            padding: 40px 30px;
        }

        .greeting {
            font-size: 18px;
            color: #333333;
            margin-bottom: 20px;
        }

        .message {
            color: #666666;
            margin-bottom: 30px;
            font-size: 15px;
        }

        .order-details {
            background-color: #f8f9fa;
            border-radius: 6px;
            padding: 25px;
            margin-bottom: 25px;
        }

        .order-details h2 {
            color: #333333;
            font-size: 20px;
            margin-bottom: 20px;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #e0e0e0;
        }

        .detail-row:last-child {
            border-bottom: none;
        }

        .detail-label {
            color: #666666;
            font-weight: 500;
            margin-right: 1em;
        }

        .detail-value {
            color: #333333;
            font-weight: 600;
            text-align: right;
        }

        .status-badge {
            display: inline-block;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .status-pending {
            background-color: #fff3cd;
            color: #856404;
        }

        .status-confirmed {
            background-color: #d1ecf1;
            color: #0c5460;
        }

        .status-active {
            background-color: #d4edda;
            color: #155724;
        }

        .price-highlight {
            background-color: #ffffff;
            border: 2px solid #667eea;
            border-radius: 6px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
        }

        .price-label {
            color: #666666;
            font-size: 14px;
            margin-bottom: 8px;
        }

        .price-amount {
            color: #667eea;
            font-size: 32px;
            font-weight: 700;
        }

        .footer {
            background-color: #f8f9fa;
            padding: 25px 30px;
            text-align: center;
            color: #666666;
            font-size: 13px;
        }

        .footer-links {
            margin-top: 15px;
        }

        .footer-links a {
            color: #667eea;
            text-decoration: none;
            margin: 0 10px;
        }

        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 25px 0;
        }

        @media only screen and (max-width: 600px) {
            .content {
                padding: 30px 20px;
            }

            .detail-row {
                flex-direction: column;
                gap: 5px;
            }

            .detail-value {
                text-align: left;
            }

            .price-amount {
                font-size: 28px;
            }
        }
    </style>
</head>

<body>
    <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
            <h1>🚗 Aguinane Cars</h1>
            <p>Car Rental in Morocco</p>
        </div>

        <!-- Content -->
        <div class="content">
            <div class="greeting">
                Hello {{ $order->customer_name }},
            </div>

            <div class="message">
                We're pleased to confirm your reservation. Your vehicle will be ready on the scheduled date.
            </div>

            <!-- Order Details -->
            <div class="order-details">
                <h2>📋 Booking Details</h2>

                <div class="detail-row">
                    <span class="detail-label">Booking Number</span>
                    <span class="detail-value">#{{ str_pad($order->id, 6, '0', STR_PAD_LEFT) }}</span>
                </div>

                <div class="detail-row">
                    <span class="detail-label">Vehicle</span>
                    <span class="detail-value">{{ $order->car->marque->nom_marque }} {{ $order->car->name }}</span>
                </div>

                <div class="divider"></div>

                <div class="detail-row">
                    <span class="detail-label">📅 Pickup Date</span>
                    <span class="detail-value">{{ \Carbon\Carbon::parse($order->pickup_date)->format('M d, Y') }}</span>
                </div>

                @if($order->pickup_location)
                    <div class="detail-row">
                        <span class="detail-label">📍 Pickup Location</span>
                        <span class="detail-value">{{ $order->pickup_location }}</span>
                    </div>
                @endif

                <div class="detail-row">
                    <span class="detail-label">📅 Return Date</span>
                    <span class="detail-value">{{ \Carbon\Carbon::parse($order->drop_date)->format('M d, Y') }}</span>
                </div>

                @if($order->drop_location)
                    <div class="detail-row">
                        <span class="detail-label">📍 Return Location</span>
                        <span class="detail-value">{{ $order->drop_location }}</span>
                    </div>
                @endif

                <div class="divider"></div>

                <div class="detail-row">
                    <span class="detail-label">Daily Rate</span>
                    <span class="detail-value">${{ number_format($order->daily_rate, 2) }}/day</span>
                </div>

                <div class="detail-row">
                    <span class="detail-label">Duration</span>
                    <span
                        class="detail-value">{{ \Carbon\Carbon::parse($order->pickup_date)->diffInDays(\Carbon\Carbon::parse($order->drop_date)) }}
                        days</span>
                </div>

                <div class="detail-row">
                    <span class="detail-label">Status</span>
                    <span class="detail-value">
                        <span class="status-badge status-{{ $order->status }}">
                            {{ ucfirst($order->status) }}
                        </span>
                    </span>
                </div>

                <!-- Price Highlight -->
                <div class="price-highlight">
                    <div class="price-label">Total Price</div>
                    <div class="price-amount">${{ number_format($order->total_price, 2) }}</div>
                    @if($order->solde_du > 0)
                        <div style="margin-top: 10px; color: #dc3545; font-weight: 600;">
                            Balance Due: ${{ number_format($order->solde_du, 2) }}
                        </div>
                    @endif
                </div>
            </div>

            @if($order->notes)
                <div style="background-color: #fff3cd; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                    <strong>📝 Note:</strong>
                    <p style="margin-top: 8px; color: #856404;">{{ $order->notes }}</p>
                </div>
            @endif

            <div class="message" style="margin-top: 30px;">
                <strong>Important Information:</strong><br>
                • Please bring your valid ID and driver's license<br>
                • Arrive 15 minutes before pickup time<br>
                • The vehicle will be provided with a full tank<br>
                • Contact us if you have any questions
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p><strong>Aguinane Cars</strong></p>
            <p>Agadir, Marrakech, Imsouane, Essaouira</p>
            <p style="margin-top: 15px; font-size: 11px; color: #999999;">
                This email was sent automatically, please do not reply directly.
            </p>
        </div>
    </div>
</body>

</html>