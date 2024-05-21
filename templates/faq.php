<?php include 'header.php';?>
    
        <main class="main">
            <div class="page-header page-header-bg">
                <div class="container">
                    <h1>FAQ</h1>
                </div><!-- End .container -->
            </div><!-- End .page-header -->

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            
            <div class="history-section">
                <div class="container">
                    <p class="lead text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                



                    <div class="accordion-wrapper mb-5 mt-2">
                        <div class="accordion">
                            <div class="accordion-heading">
                                <div class="accordion-title">Section 1 consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
                            </div>
                            
                            <div class="accordion-panel">
                                <div class="accordion-content">
                                    <p class="">1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>5Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div class="accordion-heading">
                                <div class="accordion-title">Section 2</div>
                            </div>
                            <div class="accordion-panel">
                                <div class="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div class="accordion-heading">
                                <div class="accordion-title">Section 3</div>
                            </div>
                            <div class="accordion-panel">
                                <div class="accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>




<style type="text/css">
.accordion .accordion-heading {
    /*background-color: #eee;
    color: #444;*/
    color: #000;
    cursor: pointer;
    /*padding: 18px;   */ 
    padding: 1.2rem 1.5rem;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 1.5rem;
    transition: 0.4s;
    border-bottom: 1px solid #e4e4e4;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
}
.accordion .accordion-heading .accordion-title{
    flex-basis: 95%;
}

.accordion .accordion:last-of-type {
    border-bottom: 0;
}

.accordion .accordion-heading.active,
.accordion .accordion-heading:hover {
    /*background-color: #ccc;*/

    color: #7aa93c;
    border-color: #7aa93c;
}

.accordion .accordion-heading:after {
    content: "\002B";
    color: #777;
    font-weight: 700;
    float: right;
    margin-left: 5px;
}

.accordion .accordion-heading.active:after {
    content: "\2212";
}

.accordion .accordion-panel {
    padding: 0px; 
    background-color: #fff;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;    
}


.accordion .accordion-panel .accordion-content{
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1.4rem;
    line-height: 2;
}

.accordion .accordion-panel .accordion-content p{
    line-height: 1.75;
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}




</style>


<script type="text/javascript">
    //var acc = document.getElementsByClassName("accordion-heading");
    var acc = document.querySelectorAll(".accordion .accordion-heading");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            

            var panel = this.nextElementSibling;
            var panelContentHeight = panel.find('.accordion-content').height();
            console.log(panelContentHeight);




            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

            
        });
    }
</script>







                </div><!-- End .container -->

                
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                            <h2 class="subtitle">OUR History</h2>
                            <p class="lead text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>

                            












                            <div class="accordion" id="accordion">
                                <div class="history-item">
                                    <div class="history-header" id="historyOne">
                                        <h5>
                                            <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                2000
                                            </a>
                                        </h5>
                                    </div><!-- End .history-header -->

                                    <div id="collapseOne" class="collapse show" aria-labelledby="historyOne" data-parent="#accordion">
                                        <div class="history-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                        </div><!-- End .history-body -->
                                    </div><!-- End .collapse -->
                                </div><!-- End .history-item -->

                                <div class="history-item">
                                    <div class="history-header" id="historyTwo">
                                        <h5>
                                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                2005
                                            </a>
                                        </h5>
                                    </div><!-- End .history-header -->

                                    <div id="collapseTwo" class="collapse" aria-labelledby="historyTwo" data-parent="#accordion">
                                        <div class="history-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                        </div><!-- End .history-body -->
                                    </div><!-- End .collapse -->
                                </div><!-- End .history-item -->

                                <div class="history-item">
                                    <div class="history-header" id="historyThree">
                                        <h5>
                                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                2010
                                            </a>
                                        </h5>
                                    </div><!-- End .history-header -->

                                    <div id="collapseThree" class="collapse" aria-labelledby="historyThree" data-parent="#accordion">
                                        <div class="history-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                        </div><!-- End .history-body -->
                                    </div><!-- End .collapse -->
                                </div><!-- End .history-item -->

                                <div class="history-item">
                                    <div class="history-header" id="historyFour">
                                        <h5>
                                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                2015
                                            </a>
                                        </h5>
                                    </div><!-- End .history-header -->

                                    <div id="collapseFour" class="collapse" aria-labelledby="historyFour" data-parent="#accordion">
                                        <div class="history-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                        </div><!-- End .history-body -->
                                    </div><!-- End .collapse -->
                                </div><!-- End .history-item -->

                                <div class="history-item">
                                    <div class="history-header" id="historyFive">
                                        <h5>
                                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                2018
                                            </a>
                                        </h5>
                                    </div><!-- End .history-header -->

                                    <div id="collapseFive" class="collapse" aria-labelledby="historyFive" data-parent="#accordion">
                                        <div class="history-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
                                        </div><!-- End .history-body -->
                                    </div><!-- End .collapse -->
                                </div><!-- End .history-item -->
                            </div><!-- End .accordion -->
                                
                            </div><!-- End .col-lg -->
                        </div><!-- End .row -->
                    </div><!-- End .container -->
                
            </div>











            <div class="history-section mb-5">
                <div class="container">
                    <h2 class="mb-1">Lorem Ipsum is simply dummy text of</h2>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                    <hr class="my-5">                    
                    
                    <h2 class="mb-1">Dummy text of Lorem Ipsum</h2>
                    <p class="lead">Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula.</p>
                    <hr class="my-5">
                    
                    <h2 class="mb-1">Pellentesque pellentesque Lorem Ipsum is simply dummy text of</h2>
                    <p class="lead">Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. Nulla aliquet turpis eget sodales scelerisque. Ut accumsan rhoncus sapien a dignissim. Sed vel ipsum nunc. Aliquam erat volutpat. Donec et dignissim elit. Etiam condimentum, ante sed rutrum auctor, quam arcu consequat massa, at gravida enim velit id nisl.</p>
                    <hr class="my-5">
                    
                    <h2 class="mb-1">Ipsum is simply dummy text of</h2>
                    <p class="lead">Nullam non felis odio. Praesent aliquam magna est, nec volutpat quam aliquet non. Cras ut lobortis massa, a fringilla dolor. Quisque ornare est at felis consectetur mollis. Aliquam vitae metus et enim posuere ornare. Praesent sapien erat, pellentesque quis sollicitudin eget, imperdiet bibendum magna. Aenean sit amet odio est.</p>
                    <hr class="my-5">
                    
                    <h2 class="mb-1">Mauris Lorem Ipsum is simply dummy text of</h2>
                    <p class="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris quis est lobortis odio dignissim rutrum. Pellentesque blandit lacinia diam, a tincidunt felis tempus eget.</p>
                    <hr class="my-5">
                    
                    <h2 class="mb-1">In dignissim quam eget quam sodales egestas</h2>
                    <p class="lead">Donec egestas metus non vehicula accumsan. Pellentesque sit amet tempor nibh. Mauris in risus lorem. Cras malesuada gravida massa eget viverra. Suspendisse vitae dolor erat. Morbi id rhoncus enim. In hac habitasse platea dictumst. Aenean lorem diam, venenatis nec venenatis id, adipiscing ac massa. Nam vel dui eget justo dictum pretium a rhoncus ipsum. Donec venenatis erat tincidunt nunc suscipit, sit amet bibendum lacus posuere. Sed scelerisque, dolor a pharetra sodales, mi augue consequat sapien, et interdum tellus leo et nunc. Nunc imperdiet eu libero ut imperdiet.</p>
                    <hr class="my-5">
                    
                    <h2 class="mb-1">Simply dummy text of</h2>
                    <p class="lead">Nunc varius ornare tortor. In dignissim quam eget quam sodales egestas. Nullam imperdiet velit feugiat, egestas risus nec, rhoncus felis. Suspendisse sagittis enim aliquet augue consequat facilisis. Nunc sit amet eleifend tellus. Etiam rhoncus turpis quam. Vestibulum eu lacus mattis, dignissim justo vel, fermentum nulla. Donec pharetra augue eget diam dictum, eu ullamcorper arcu feugiat.</p>
                    <hr class="my-5">
                    
                    <h2 class="mb-1">Proin ut Lorem Ipsum is simply dummy text of</h2>
                    <p class="lead">Proin ut ante vitae magna cursus porta. Aenean rutrum faucibus augue eu convallis. Phasellus condimentum elit id cursus sodales. Vivamus nec est consectetur, tincidunt augue at, tempor libero.</p> 
                    

                </div><!-- End .container -->
            </div><!-- End .history-section -->

            

            
        </main><!-- End .main -->

<?php include 'footer.php';?>