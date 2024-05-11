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
                    <li class="active"><span>Shipping</span></li>
                    <li><span>Billing</span></li>
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
                            <!-- <div class="checkout-methods">
                                <a href="checkout-shipping.html" class="btn btn-block btn-sm btn-primary">NEXT</a>
                            </div> -->
                        </div>                        
                    </div>

                    <div class="col-lg-8 order-lg-first">                        
                        <div class="_checkout-payment">                            
                            <h2 class="step-title mb-2">Shipping Address</h2>
                            <div class="form-group-custom-control">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="change-bill-address" value="1">
                                    <label class="custom-control-label" for="change-bill-address">My profile address and shipping address are the same</label>
                                </div>
                            </div>

                            <form action="#">
                                
                                <div class="form-group row required-field">
                                    <label class="col-md-3">Street Address</label> 
                                    <div class="col-md-9">
                                        <input type="text" class="form-control max-w-full" required name="street_address">
                                    </div>
                                </div>

                                <div class="form-group row required-field">
                                    <label class="col-md-3">City</label> 
                                    <div class="col-md-9">
                                        <input type="text" class="form-control max-w-full" required name="city">
                                    </div>
                                </div>

                                <div class="form-group row required-field mb-5">
                                    <label class="col-md-3">Country</label> 
                                    <div class="col-md-9 _select-custom">
                                        <select class="form-control max-w-full" name="country">
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
                                            <a href="#" class="btn btn-danger btn-sm mr-5">Reset</a>
                                            <a href="#" class="btn btn-primary btn-sm __btn-outline-secondary btn-update-cart">Next</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>              
                    </div>
                </div><!-- End .row -->

                <!-- 
                <div class="row">
                    <div class="col-lg-8">
                        <div class="checkout-steps-action">
                            <a href="checkout-review.html" class="btn btn-primary float-right">NEXT</a>
                        </div>
                    </div>
                </div>
                -->
            </div>

            <div class="mb-6"></div><!-- margin -->
        </main>

<?php include 'footer.php';?>       