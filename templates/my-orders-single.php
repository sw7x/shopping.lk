<?php include 'header.php';?>

        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-1">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">My orders single</li>
                    </ol>
                </div><!-- End .container -->
            </nav>


            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <h2  class="step-title mb-2">My Orders Single</h2>

                        <div class="cart-table-container">
                            <table class="table table-cart">
                                <thead>
                                    <tr>
                                        <th class="product-col">Product</th>
                                        <th class="price-col">Price</th>
                                        <th class="qty-col">Qty</th>
                                        <th>Shipping Cost</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="product-row">
                                        <td class="product-col">
                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
                                                    <img src="assets/images/products/product-4.jpg" alt="product">
                                                </a>
                                            </figure>
                                            <div class="product-name">
                                                <h2 class="product-title text-xl">
                                                    <a href="product.html">Phillips</a>
                                                </h2>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div class="old-price">$15.00</div>
                                                <div class="">$15.00</div>
                                            </div>                                              
                                        </td>
                                        <td>5</td>
                                        <td>$1.90</td>
                                        <td>$17.90</td>
                                    </tr>
                                    

                                    <tr class="product-row">
                                        <td class="product-col">
                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
                                                    <img src="assets/images/products/product-3.jpg" alt="product">
                                                </a>
                                            </figure>
                                            <div class="product-name">
                                                <h2 class="product-title text-xl">
                                                    <a href="product.html">Optical Mouse</a>
                                                </h2>
                                            </div>
                                        </td>
                                        <td>$8.90</td>
                                        <td>7</td>
                                        <td>$2.00</td>
                                        <td>$8.90</td>
                                    </tr>                                    
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <td colspan="5" class="clearfix">
                                            <div class="float-left py-2">
                                                <h3 class="subtitle mb-0">Used Discount Code</h3>
                                            </div>
                                            <div class="float-right">
                                                <button type="button" class="btn btn-secondary cursor-default" disabled>ABFF24</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div><!-- End .cart-table-container -->

                        <div class="cart-discount">
                            <h3 class="subtitle mb-2">Discount Information</h3>
                            
                            <table class="table-striped _table-sm table">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Discounted rate</td>
                                        <td>40%</td>                                                                
                                    </tr>
                                    <tr>
                                        <td>Coupon applied item</td>
                                        <td>Optical Mouse VX1234</td>                                                                
                                    </tr>
                                    <tr>
                                        <td>Coupon applied item count</td>
                                        <td>1</td>                                                                
                                    </tr>                                    
                                    <tr>
                                        <td>Old price</td>
                                        <td>$107.00 x 1 = $107.00</td>                                                                
                                    </tr>                                    
                                    <tr>
                                        <td>New price</td>
                                        <td>1 x [$107.00 - ($107.00 x 40%)] = $100.00</td>                                                                
                                    </tr>
                                                                                                
                                </tbody>
                            </table>
                            

                           




                        </div><!-- End .cart-discount -->
                    </div><!-- End .col-lg-8 -->

                    <div class="col-lg-4">
                        <div class="cart-summary">
                            <h3 class="title">Summary</h3>

                            <div class="__collapse" id="total-estimate-section">
                                <div class="py-2"><h3 class="subtitle">Price</h3></div>
                                <table class="table table-totals">
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>+ $1700.90</td>
                                        </tr>
                                        <tr>
                                            <td>Discount</td>
                                            <td> - $10.90</td>
                                        </tr>
                                        <tr>
                                            <td>Total Shipping Cost</td>
                                            <td>+ $0.00</td>
                                        </tr>                               
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Order Total</td>
                                            <td>$1690.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div class="__collapse mb-2" id="">
                                <h3 class="subtitle">Shipping Address</h3>
                                <div class="">    
                                    <div class="address">
                                        <p class="lead text-right">peter andrews</p>
                                        <p class="lead text-right">123/3</p>
                                        <p class="lead text-right">Main Street avenu new Building</p>
                                        <p class="lead text-right">Anytown</p>
                                        <p class="lead text-right">USA 12345</p>
                                        <p class="lead text-right">united states of america</p>
                                    </div>                                    
                                </div>
                            </div>

                            <div class="__collapse" id="total-estimate-section">
                                <h3 class="subtitle">Billing details</h3>
                                <div class="">    
                                    <table class="table table-totals table-striped table-sm">
                                        <tbody>
                                            <tr>
                                                <td class="pl-2 border-right">First name</td>
                                                <td class="pr-2">Amal up</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-2 border-right">Last name</td>
                                                <td class="pr-2">Wijesekara</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-2 border-right">E-mail</td>
                                                <td class="pr-2">we.sdgvasdhasdasdasd@gmail.com</td>
                                            </tr>                                        
                                            <tr>
                                                <td class="pl-2 border-right">Phone Number</td>
                                                <td class="pr-2">0981234567890</td>
                                            </tr>                                        
                                            <tr>
                                                <td class="pl-2 border-right">Country</td>
                                                <td class="pr-2">united states of america</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-2 border-right">City</td>
                                                <td class="pr-2">Newyork</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-2 border-right">Street Address</td>
                                                <td class="pr-2">123 Main Street, Anytown, USA 12345, united states of america</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            

                            <!-- 
                            <div class="checkout-methods">
                                <a href="checkout-shipping.html" class="btn btn-block btn-sm btn-primary">Go to Checkout</a>
                                <a href="#" class="btn btn-link btn-block">Check Out with Multiple Addresses</a>
                            </div>End .checkout-methods 
                            -->
                        





                        </div><!-- End .cart-summary -->
                    </div><!-- End .col-lg-4 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-6"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>       




