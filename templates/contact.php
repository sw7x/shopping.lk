<?php include 'header.php';?>
 
        <main class="main">
            <div class="page-header page-header-bg">
                <div class="container">
                    <h1>Contact Us</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div id="map"></div><!-- End #map -->

                <div class="row">
                    <div class="col-md-8">
                        <h2 class="step-title mb-2">Contact Form</h2>

                        
                        <form action="#">
                            <div class="form-group required-field">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="full_name" name="full_name" required>
                            </div>

                            <div class="form-group required-field">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" class="form-control" id="phone" name="phone">
                            </div> 

                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject">
                            </div>

                            <div class="form-group required-field">
                                <label for="message">What’s on your mind?</label>
                                <textarea cols="30" rows="7" id="message" class="form-control" name="message" required></textarea>
                            </div>

                            <input type="hidden" name="user_id" value="7">

                            <div class="form-footer">
                                <button type="reset" class="btn btn-danger">Reset</button>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>                        
                        </form>

                    </div>
                    <div class="col-md-4">
                        <h2 class="subtitle">Contact <strong>Details</strong></h2>

                        <div class="contact-info">
                            <div>
                                <i class="icon-phone"></i>
                                <p><a href="tel:">0201 203 2032</a></p>
                                <p><a href="tel:">0201 203 2032</a></p>
                            </div>
                            <div>
                                <i class="icon-mobile"></i>
                                <p><a href="tel:">201-123-3922</a></p>
                                <p><a href="tel:">302-123-3928</a></p>
                            </div>
                            <div>
                                <i class="icon-mail-alt"></i>
                                <p><a href="mailto:#">porto@gmail.com</a></p>
                                <p><a href="mailto:#">porto@portotemplate.com</a></p>
                            </div>
                            <div>
                                <i class="icon-skype"></i>
                                <p>porto_skype</p>
                                <p>porto_template</p>
                            </div>
                        </div><!-- End .contact-info -->
                    </div><!-- End .col-md-4 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-8"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>         