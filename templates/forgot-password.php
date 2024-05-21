<?php include 'header.php';?>

    
        <main class="main">
            <div class="page-header page-header-bg">
                <div class="container">
                    <h1>Forgot Password</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Forgot Password</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        
                        <div class="text-section">                            
                            <p>Please enter your email address below to receive a password reset link.</p>
                        </div>

                        <form action="#" class="mt-2">
                            <div class="form-group row required-field">
                                <label class="col-md-3 _col-form-label">Email</label> 
                                <div class="col-12 col-md-9">
                                    <input id="text" name="text" type="text" class="form-control">
                                </div>
                            </div>                            

                            <div class="form-group row">
                                <div class="offset-md-3 col-9">
                                    <div class="required text-left mb-1">* Required Field</div>
                                </div>

                                <div class="offset-md-3 col-md-9">
                                    <button type="reset" class="btn btn-sm btn-danger mr-5">Clear</button>
                                    <button type="submit" class="btn btn-sm btn-primary">Reset My Password</button>
                                </div>                                
                            </div>                            
                        </form>

                    </div>
                </div>
            </div>

            <div class="mb-10"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>        