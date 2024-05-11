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
                    <div class="col-lg-9 order-lg-last dashboard-content">
                        
                        <h2 class="step-title mb-2">My Dashboard</h2>

                        <div class="alert alert-success alert-intro" role="alert">
                            Thank you for registering with Porto - Premium Template.
                        </div>

                        <div class="alert alert-success" role="alert">
                            Hello, <strong>Porto customer!</strong> From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.
                        </div>

                        <div class="mb-4"></div>
                    
                        
                        <div class="card">
                            <div class="card-header">Finance</div>

                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        
                                        <table class="ratings-table mt-0 mb-0">
                                            <thead>
                                                <tr><th colspan="2">Cart</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Items in Cart</td>
                                                    <td>5</td>                                                                
                                                </tr>
                                                <tr>
                                                    <td>Total Amount</td>
                                                    <td>$40.00</td>                                                                
                                                </tr>                                                
                                            </tbody>
                                        </table>

                                        <table class="ratings-table mt-3 mb-0">
                                            <thead>
                                                <tr><th colspan="2">Wishlist</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Items in Wishlist</td>
                                                    <td>4</td>                                                                
                                                </tr>
                                                <tr>
                                                    <td>Total Amount</td>
                                                    <td>$32.00</td>                                                                
                                                </tr>
                                            </tbody>
                                        </table>


                                        <table class="ratings-table mt-3 mb-0">
                                            <thead>
                                                <tr><th colspan="2">Already Bought</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Total Orders</td>
                                                    <td>4</td>                                                                
                                                </tr>
                                                <tr>
                                                    <td>Total Items</td>
                                                    <td>23</td>                                                                
                                                </tr>
                                                <tr>
                                                    <td>Spend</td>
                                                    <td>$32.00</td>                                                                
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">ACCOUNT</div>
                            <table class="_ratings-table table mt-0 mb-0">
                                <tbody>
                                    <tr>
                                        <td>Joined Date</td>
                                        <td>4</td>                                                                
                                    </tr>
                                    <tr>
                                        <td>Last Updated Date</td>
                                        <td>23</td>                                                                
                                    </tr>
                                </tbody>
                            </table>
                        </div>                

                    </div>

                    <aside class="sidebar col-lg-3">
                        <div class="widget widget-dashboard">
                            <h3 class="widget-title">My Account</h3>

                            <?php include 'user-menu-links.php';?>
                                 
                        </div><!-- End .widget -->
                    </aside><!-- End .col-lg-3 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>        