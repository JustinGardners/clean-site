// JavaScript Document
/**
 * Freeow!
 * Stylish, Growl-like message boxes
 *
 * Copyright (c) 2011 PJ Dietz
 * Version: 1.0.0
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://pjdietz.com/jquery-plugins/freeow/
 */
storeFront.bundleQty = 0;
$( document ).ready(function(){
    storeFront.pageWidth = $(window).width();
    if(storeFront.pageWidth > 960){
        storeFront.offset = Math.round(((storeFront.pageWidth - 950)/2)+950)-345;
    }

    $(".buyButtonBundle").on( "click", function(e) {
        var products = $(this).data("multiproducts").split("|");
        var productImages = $(this).data("multiproductsimages").split("|");
        e.preventDefault();
        storeFront.bundleQty = $(this).data("hits");
        var thisElement = this;
        i = 0;
        var imageString = "";
        while (i < productImages.length) {
            imageString += "<div><img src='" + productImages[i] + "' /></div>";
            i++;
        }
        console.log(imageString);
        i = 0;
        $("#freeow").prepend("<div class='multi-overlay'><div class='multi-overlay__header'>Adding bundle to basket: (" + storeFront.bundleQty + ") items</div><div class='multi-overlay__title'>" + $(this).data("title") + "</div><div class='multi-overlay__images'>" + imageString + "</div><div class='multi-overlay__subtitle'>Please wait while we add your items to the basket</div><div class='multi-overlay__spinner'></div></div>");
        while (i < products.length) {
            storeFront.addToBasket(products[i], thisElement,"");
                i++;
        }
    } );
});
    /*global setTimeout, jQuery */
    
    (function ($) {
    
        "use strict";
         
        var Freeow;
        
        Freeow = function (title, message, options, image, basketTotal, basketQuantity, root, e = null) {
            
            var startStyle, i, u;
            
            // Merge the options.
            this.options = $.extend({}, $.fn.freeow.defaults, options);
                        
            // Build the element with the template function.
            this.element = $(this.options.template(title, message, image, basketTotal, basketQuantity, root, e = null));
            
            // Set its initial style to the startStyle or hideStyle.
            if (this.options.startStyle) {
                startStyle = this.options.startStyle;
            }
            else {
                startStyle = this.options.hideStyle;
            }
            this.element.css(startStyle);
    
            // Store a reference to it in the data.
            this.element.data("freeow", this);
            
            // Add to the element.
            for (i = 0, u = this.options.classes.length; i < u; i += 1) {
                this.element.addClass(this.options.classes[i]);
            }
                
            // Bind the event handler.
            this.element.click(this.options.onClick);
            this.element.hover(this.options.onHover);
            
            // Default. Set to true in show() if there's an autoHideDelay.
            this.autoHide = false;
            
        };
        
        Freeow.prototype = {
            
            attach: function (container) {
                $(container).append(this.element);
                this.show();
            }, 
            
            show: function () {
                
                var opts, self, fn, delay;
                
                opts = { 
                    duration: this.showDuration
                };
                
                // If an auto hide delay is set, create a callback function and
                // set it to fire after the auto hide time expires.
                if (this.options.autoHide && this.options.autoHideDelay > 0) {
          
                    this.autoHide = true;
                    
                    self = this;
                    delay = this.options.autoHideDelay;
                    fn = function () { 
                        if (self.autoHide) {
                            self.hide(); 
                        }
                    };
                    
                    opts.complete = function () {
                        setTimeout(fn, delay);
                    };
                        
                }    
                
                // Animate to the "show" style.
                // Optionally, set the auto hide function to fire on a delay.
                this.element.animate(this.options.showStyle, opts);
    
            },
            
            hide: function () {
                
                var self = this; // Keep "this" from current scope;
                         
                this.element.animate(this.options.hideStyle, {
                    duration: this.options.hideDuration,
                    complete: function () {
                        self.destroy();
                    }    
                });
    
            },
            
            destroy: function () {
                
                // Remove the Freeow instance from the element's data.
                this.element.data("freeow", undefined);
                
                // Remove the element from the DOM.
                this.element.remove();
                if(storeFront.bundleQty > 0){
                    if($('#freeow').children(".smokey").length == 0){
                        $("#freeow .multi-overlay").remove();
                    }
                }
            }
        };
        
        // Extend jQuery ----------------------------------------------------------- 
    
        if (typeof $.fn.freeow === "undefined") {
         
            $.fn.extend({  
                
                freeow: function (title, message, options, image, basketTotal, basketQuantity, root, e = null) {
                
                    return this.each(function () {
                        
                        var f;
                        
                        f = new Freeow(title, message, options, image, basketTotal, basketQuantity, root, e = null);
                        f.attach(this);
                                
                    }); // return this.each()
                
                } // freeow()
            
            }); // $.fn.extend()
         
            // Configuration Defaults. 
            $.fn.freeow.defaults = {
                
                autoHide: true,
                autoHideDelay: 2500,
                classes: [],
                startStyle: null,
                showStyle: {opacity: 1.0},
                showDuration: 250,
                hideStyle: {opacity: 0.0},
                hideDuration: 400,
                
                onClick: function (event) {
                    $(this).data("freeow").hide();
                },
                
                onHover: function (event) {
                    if(storeFront.bundleQty === 0){
                        $(this).data("freeow").autoHide = false;
                    }
                },
    
                template: function (title, message,image, basketTotal, basketQuantity, root, e = null) {
                    
                    var e;
                    
                    e = [
                        '<div>',
                        '<div class="background">',
                        '<div class="content clearfix">',
                        '<div class="topText">',
                        '<span class="close">X</span>',
                        '<p class="message">' + title + '</p>',
                        '</div>',
                        '<div class="jacket"><img class="jacket" src="' + image + '" /></div>',
                        '<div class="middleText">',
                        '<h5>' + message + '</h5>',
                        '</div>',
                        '<div class="bottomText">',
                        '<p class="total">Basket Total:<br /><span>' + basketTotal + '</span> ('+basketQuantity+' items)</p>',
                        '<a class="buyButton" href="/basket">View basket</a>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '</div>'
                    ].join("");
                    
                    return e;
                },
                templateAddToWishlist: function (title, message, image) {
                    var e;
                    e = [
                        '<div>',
                        '<div class="background">',
                        '<div class="content wishlist clearfix">',
                        '<div class="topText">',
                        '<span class="close">X</span>',
                        '<p class="message">Added to Wishlist</p>',
                        '</div>',
                        '<div class="jacket"><img class="jacket" src="' + image + '" /></div>',
                        '<div class="middleText">',
                        '<h5>' + message + '</h5>',
                        '</div>',
                        '<div class="bottomText">',
                        '<a class="wishlist" href="/Account/Wishlist">View wishlist</a>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '</div>'
                    ].join("");       
                    
    
                 return e;
                }
                 
            }; // $.fn.freeow.defaults
            
        } // if undefined        
                
    }(jQuery));


