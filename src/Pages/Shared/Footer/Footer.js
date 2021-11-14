import React from 'react';

const Footer = () => {
    return (
        <div style={{marginTop: '5%'}}>
        
            <footer class="bg-dark text-center text-white">
             
                <div class="container p-4">
                   
                    <section class="mb-4">
                   
                    </section>
            
                    <section class="">
                        <form action="">
                   
                            <div class="row d-flex justify-content-center">
                             
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                               

                          
                                <div class="col-md-5 col-12">
                                     <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" class="form-control" />
                                        <label class="form-label" for="form5Example21">Email address</label>
                                    </div>
                                </div>
                         

                      
                                <div class="col-auto">
                              
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                         
                            </div>
                           
                        </form>
                    </section>
          
                    <section class="mb-4">
                        <p>
                            we are commited to give you something called more than special
                        </p>
                    </section>
                   

                 
                    <section class="">
                      
                        <div class="row">
                         

           
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
 
                            </div>
                 
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

                            </div>
                    
                        </div>
                        
                    </section>
                    
                </div>
      
                <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a class="text-white" href="#home">GoTravel</a>
                </div>
            
            </footer>
         
        </div>
    );
};

export default Footer;