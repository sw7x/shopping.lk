<?php include 'header.php';?>
        
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    <aside class="sidebar col-lg-3">
                        <?php include 'user-menu-links.php';?>
                    </aside>

                    <div class="col-lg-9 dashboard-content">
                        <div class="_checkout-payment"> 
                            <h2  class="step-title mb-2">Edit Account Information</h2>
                           
                            <form action="#">

                                <div class="form-group row required-field">
                                    <label class="col-md-3">City</label> 
                                    <div class="col-md-9">                                
                                        <input type="text" class="form-control" required name="city">
                                    </div>
                                </div>
                                
                                <div class="form-group row required-field">
                                    <label class="col-md-3">Full Name</label> 
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" required name="full_name" id="full_name_input" value="peter steve andrews">
                                    </div>
                                </div>

                                <div class="form-group row required-field">
                                    <label class="col-md-3">E-mail Address</label> 
                                    <div class="col-md-9">
                                        <input type="email" class="form-control" name="email" disabled value="peter.andrews@gmail.com">
                                    </div>
                                </div>                                

                                <div class="form-group row required-field">
                                    <label class="col-md-3">Username</label> 
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" name="username" disabled value="peter.andrews">
                                    </div>
                                </div>                                

                                <div class="form-group row required-field">
                                    <label class="col-md-3">Phone Number</label> 
                                    <div class="col-md-9">
                                        <input type="tel" class="form-control" required name="phone" value="+441234567890">                                        
                                    </div>
                                </div>

                                <div class="form-group row required-field">
                                    <label class="col-md-3">Gender</label> 
                                    <div class="col-md-9 select-custom">
                                        <select class="form-control" name="gender">
                                            <option value="male" selected>Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row required-field">
                                    <label class="col-md-3">Date of birth</label> 
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" required name="dob" value="1986/11/21">
                                    </div>
                                </div>

                                <div class="form-group row required-field">
                                    <label class="col-md-3">Street Address</label> 
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" required value="123 Main Street, Anytown, USA 12345">
                                    </div>
                                </div>

                                <div class="form-group row required-field">
                                    <label class="col-md-3">Zip code</label> 
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" required value="23456">
                                    </div>
                                </div>

                                <div class="form-group row required-field">
                                    <label class="col-md-3">City</label> 
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" required name="city" value="Newyork">
                                    </div>
                                </div>

                                <div class="form-group row required-field">
                                    <label class="col-md-3">Country</label> 
                                    <div class="col-md-9 select-custom">
                                        <select class="form-control" name="country">
                                            <option value="USA" selected>United States</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="China">China</option>
                                            <option value="Germany">Germany</option>
                                        </select>                                    
                                    </div>
                                </div>


                                <div class="form-group row">
                                    <div class="offset-md-3 col-md-9">
                                        <div class="required text-left mb-1">* Required Field</div>
                                    </div>

                                    <div class="offset-md-3 col-md-9">
                                        <button type="reset" class="btn btn-secondary mr-5">Discard</button>
                                        <button type="submit" class="btn btn-primary">Edit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>             

                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>