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
                        <h2 class="step-title mb-2">Account Information</h2>
                        <table class="ratings-table mb-2">
                            <tbody>
                                <tr>
                                    <td>Full Name</td>
                                    <td>Mary Elizabeth Smith</td>                                                                
                                </tr>
                                <tr>
                                    <td>Email </td>
                                    <td>sample.email@gmail.com</td>                                                                
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>+91234567890</td>                                                                
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>mary.elizabeth</td>                                                                
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>Male</td>                                                                
                                </tr>
                                <tr>
                                    <td>Date of birth</td>
                                    <td>1992/02/03</td>                                                                
                                </tr>
                                <tr>
                                    <td>Street address</td>
                                    <td>123 Main Street, Anytown, USA 12345</td>                                                                
                                </tr>                                
                                <tr>
                                    <td>Zip code</td>
                                    <td>20655</td>                                                                
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>Newyork</td>                                                                
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td>USA</td>                                                                
                                </tr>                                               
                            </tbody>
                        </table>
                    
                    </div>

                    <aside class="sidebar col-lg-3">
                        <?php include 'user-menu-links.php';?>
                    </aside>
                    

                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>