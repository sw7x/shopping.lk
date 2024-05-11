<?php include 'header.php';?>
        
        <main class="main">
            <div class="page-header page-header-bg">
                <div class="container">
                    <h1>Login</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Login</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">                    
                    <div class="col-md-12">
                         <div class="text-section mb-2">
                            <p class="lead">If you have an account with us, please log in.</p>
                        </div>

                        <form action="#">
                            <div class="form-group row">
                                <label class="col-md-3 _col-form-label">Email or Username</label> 
                                <div class="col-12 col-md-9">
                                    <input id="text" name="text" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 _col-form-label">Password</label> 
                                <div class="col-12 col-md-9">
                                    <input id="text1" name="text1" type="password" class="form-control">
                                </div>
                            </div> 
                            <div class="form-group row">
                                <div class="offset-3 col-md-9">
                                    <button type="reset" class="btn btn-danger mr-5">Reset</button>
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                                <div class="offset-3 col-md-9 mt-3">
                                    <a href="#" class="forget-pass btn-link"> Forgot your password ?</a>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- 
                    <div class="col-md-12 checkout-payment">
                        <h2 class="step-title mb-2">Login</h2>                        
                        <form action="#">

                            <div class="form-group required-field">
                                <label>Email Address </label>
                                <input type="email" class="form-control" required>
                            </div>

                            <div class="form-group required-field">
                                <label>Password </label>
                                <input type="password" class="form-control" required>
                            </div>

                            <div class="form-footer">
                                <button type="reset" class="btn btn-danger">RESET</button>
                                <button type="submit" class="btn btn-primary">LOGIN</button>
                                <a href="#" class="forget-pass"> Forgot your password?</a>
                            </div>
                        </form>
                    </div> 
                    -->
                    
                </div>
            </div>

            <div class="mb-5"></div>
        </main>

<?php include 'footer.php';?>


        