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
                    <li class="active"><span>Billing</span></li>
                    <li><span>Pay</span></li>
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

                           
                        </div>

                    </div>

                    <div class="col-lg-8 order-lg-first">
                        <div class="checkout-payment">
                            <h2 class="step-title mb-2">Billing Details</h2>

                            <h4>Check / Money order</h4>
                            
                            <div class="form-group-custom-control">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="change-bill-address" value="1">
                                    <label class="custom-control-label" for="change-bill-address">My billing and shipping address are the same</label>
                                </div><!-- End .custom-checkbox -->
                            </div><!-- End .form-group -->

                            <div id="checkout-shipping-address">
                                <address>
                                    Desmond Mason <br>
                                    123 Street Name, City, USA <br>
                                    Los Angeles, California 03100 <br>
                                    United States <br>
                                    (123) 456-7890
                                </address>
                            </div><!-- End #checkout-shipping-address -->

                            <div id="new-checkout-address" class="show">
                                <form action="#">
                                    <div class="form-group required-field">
                                        <label>Full Name</label>
                                        <input type="text" class="form-control" required name="full_name">
                                    </div>

                                    <div class="form-group required-field">
                                        <label>E-mail Address</label>
                                        <input type="email" class="form-control" required name="email">
                                    </div>

                                    <div class="form-group required-field">
                                        <label>Phone Number</label>
                                        <input type="tel" class="form-control" required name="phone">                                        
                                    </div>

                                    <div class="form-group required-field">
                                        <label>Street Address </label>
                                        <input type="text" class="form-control" required>
                                    </div>

                                    <div class="form-group required-field">
                                        <label>City</label>
                                        <input type="text" class="form-control" required name="city">
                                    </div>

                                    <div class="form-group mb-5">
                                        <label>Country</label>
                                        <div class="select-custom">
                                            <select class="form-control" name="country">
                                                <option value="USA">United States</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="China">China</option>
                                                <option value="Germany">Germany</option>
                                            </select>
                                        </div>
                                    </div>

                                    <hr>                                   

                                    <div class="mt-3">
                                        
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <a href="category.html" class="btn btn-sm btn-outline-secondary">Back</a>
                                            </div>

                                            <div class="float-right">
                                                <a href="#" class="btn btn-danger btn-sm mr-3">Reset</a>
                                                <a href="#" class="btn btn-primary btn-sm __btn-outline-secondary btn-update-cart">Next</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                        

                        
                    </div><!-- End .col-lg-8 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-6"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>       