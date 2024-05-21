<?php include 'header.php';?>
        
        <main class="main">
            <div class="page-header page-header-bg">
                <div class="container">
                    <h1>Register</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Register</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        
                        <div class="text-section mb-2">
                            <p class="lead">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                        </div>

                        <form action="#" class="mt-2">
                            <div class="form-group row required-field">
                                <label class="col-md-3">Full Name</label> 
                                <div class="col-md-9">
                                    <input type="text" class="form-control" required name="full_name" id="full_name_input">
                                </div>
                            </div>

                            <div class="form-group row required-field">
                                <label class="col-md-3">E-mail Address</label> 
                                <div class="col-md-9">
                                    <input type="email" class="form-control" name="email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3">Username</label> 
                                <div class="col-md-9">
                                    <input type="text" class="form-control" name="username">
                                </div>
                            </div>

                            <div class="form-group row required-field">
                                <label class="col-md-3">Phone Number</label> 
                                <div class="col-md-9">
                                    <input type="tel" class="form-control" required name="phone">                                        
                                </div>
                            </div>

                            <div class="form-group row required-field">
                                <label class="col-md-3">Gender</label> 
                                <div class="col-md-9 _select-custom">
                                    <select class="form-control" name="gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>                                                                                
                                </div>
                            </div>                            

                            <div class="form-group row required-field">
                                <label class="col-md-3">Date of birth</label> 
                                <div class="col-md-9">
                                    <input type="text" class="form-control" required name="dob">
                                </div>
                            </div>                                

                            <div class="form-group row required-field">
                                <label class="col-md-3">Street Address</label> 
                                <div class="col-md-9">                                
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>                                

                            <div class="form-group row required-field">
                                <label class="col-md-3">Zip code</label> 
                                <div class="col-md-9">                                
                                    <input type="text" class="form-control" required>
                                </div>
                            </div>                                

                            <div class="form-group row required-field">
                                <label class="col-md-3">City</label> 
                                <div class="col-md-9">                                
                                    <input type="text" class="form-control" required name="city">
                                </div>
                            </div>

                            <div class="form-group row required-field">
                                <label class="col-md-3">Gender</label>
                                <div class="col-md-9 _select-custom">
                                    <select class="form-control" name="gender">
                                        <option value="USA">United States</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="China">China</option>
                                        <option value="Germany">Germany</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="offset-md-3 col-9">
                                    <div class="required text-left mb-1">* Required Field</div>
                                </div>
                                
                                <div class="offset-md-3 col-md-9">
                                    <button type="reset" class="btn btn-sm btn-danger mr-5">Reset</button>
                                    <button type="submit" class="btn btn-sm btn-primary">Create Account</button>
                                </div>

                                <div class="offset-md-3 col-md-9">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="newsletter-signup">
                                        <label class="custom-control-label" for="newsletter-signup">I have read and agree to the <a href="terms-and-services.php" class="btn-link">Terms and Services</a> of Shopping.lk</label>
                                    </div>    
                                </div>
                            </div>                      
                        </form>
                
                    </div>
                </div>
            </div>

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>


        