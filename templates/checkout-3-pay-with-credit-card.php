<?php include 'header.php';?>        

        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <ul class="checkout-progress-bar">
                    <li><span>Shipping</span></li>
                    <li><span>Billing</span></li>
                    <li class="active"><span>Pay</span></li>
                </ul>
                <div class="row">
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

                            
                        </div>
                        
                    </div>

                    <div class="col-lg-8 order-lg-first">
                        <div class="checkout-payment">
                            <h2 class="step-title mb-2">Payment Method</h2>

                            <div id="new-checkout-address" class="show">
                                <form action="#">
                                    <div class="form-group required-field">
                                        <label>Card Number</label>
                                        <input type="text" class="form-control" required>
                                    </div>

                                    <div class="form-group required-field">
                                        <label>Full Name </label>
                                        <input type="text" class="form-control" required>
                                    </div>

                                    <div class="form-group required-field">
                                        <label>Expire Date </label>
                                        <input type="text" name="expiry" id="expiry" placeholder="MM/YY" class="form-control">
                                    </div>

                                    <div class="form-group required-field mb-5">
                                        <label>CVC</label>
                                        <input type="text" name="cvc" class="form-control" 
                                               maxlength="3" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                                    </div>
                                    <hr>

                                    <div class="mt-3">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <a href="category.html" class="btn btn-sm btn-outline-secondary">Back</a>
                                            </div>

                                            <div class="float-right">
                                                <a href="#" class="btn btn-danger btn-sm mr-3">Reset</a>
                                                <a href="#" class="btn btn-primary btn-sm __btn-outline-secondary btn-update-cart">Checkout</a>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            
                        </div><!-- End .checkout-payment -->

                        
                        


                    </div><!-- End .col-lg-8 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-6"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>       