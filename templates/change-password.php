<?php include 'header.php';?>
        
        <main class="main">
            <div class="page-header page-header-bg">
                <div class="container">
                    <h1>Change Password</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Change Password</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">                                                
                        <form action="#">
                            <input type="password" class="form-control" placeholder="Password" required>
                            <input type="password" class="form-control" placeholder="Confirm Password" required>
                            
                            <div class="form-footer">
                                <button type="submit" class="btn btn-primary">SUBMIT</button>
                                <button type="reset" class="btn btn-danger">RESET</button>
                            </div><!-- End .form-footer -->
                        </form>
                    </div><!-- End .col-md-6 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>


        