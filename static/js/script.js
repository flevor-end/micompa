$("#applyBtn").on("click", function () {
  alert("Thanks for viewing!");
});

$(".detonadorMenu").click(function () {
  if ($(this).hasClass("activo")) {
    $(this).removeClass("activo");
    $(".menuBox").removeClass("menuActivo");
    $("#header").removeClass("menuActivo");
    $("#body").removeClass("menuActivo");
    $(".box").removeClass("activo");
  } else {
    $(this).addClass("activo");
    $(".menuBox").addClass("menuActivo");
    $("#header").addClass("menuActivo");
    $("#body").addClass("menuActivo");
    $(".resultadoMenu1").addClass("activo");
    $(".resulReg").removeClass("activo");
    $(".registro").removeClass("registroActivo");
  }
});
$(".detonadorRegistro").click(function () {
  if ($(this).hasClass("activo")) {
    $(this).removeClass("activo");
    $(".registro").removeClass("registroActivo");
    $("#header").removeClass("registroActivo");
    $("#body").removeClass("registroActivo");
    $(".box").removeClass("activo");
    $(".resulReg").removeClass("activo");
  } else {
    $(this).addClass("activo");
    $(".registro").addClass("registroActivo");
    $("#header").addClass("registroActivo");
    $("#body").addClass("registroActivo");
    $(".resulReg").addClass("activo");
  }
});
$(".detonadorTerminos").click(function () {
  if ($(this).hasClass("activo")) {
    $(this).removeClass("activo");
    $(".terminos").removeClass("terminosActivo");
    $("#header").removeClass("terminosActivo");
    $("#body").removeClass("terminosActivo");
    $(".box").removeClass("activo");
    $(".resulTerminos").removeClass("activo");
  } else {
    $(this).addClass("activo");
    $(".menuBox").addClass("menuActivo");
    $(".terminos").addClass("terminosActivo");
    $("#header").addClass("registroActivo");
    $("#body").addClass("registroActivo");
    $(".resulTerminos").addClass("activo");
    $(".terminos").addClass("terminosActivo");
  }
});

$(".detonadorMenuHbg").click(function () {
  if ($(this).hasClass("activo")) {
    $(this).removeClass("activo");
    $(".menuHbg").removeClass("menuHbgActivo");
    $("#header").removeClass("menuHbgActivo");
    $("#body").removeClass("menuHbgActivo");
    $(".resultadoMenuHbg").removeClass("activo");
  } else {
    $(this).addClass("activo");
    $(".menuHbg").addClass("menuHbgActivo");
    $("#header").addClass("menuHbgActivo");
    $("#body").addClass("menuHbgActivoo");
    $(".resultadoMenuHbg").addClass("activo");
  }
});
$(".detonadorRecuperar").click(function () {
  if ($(this).hasClass("activo")) {
    $(this).removeClass("activo");
    $(".olvidoContrasena").removeClass("olvidoContrasenaActivo");
    $("#header").removeClass("olvidoContrasenaActivo");
    $("#body").removeClass("olvidoContrasenaActivo");
    $(".box").removeClass("activo");
  } else {
    $(this).addClass("activo");
    $(".olvidoContrasena").addClass("olvidoContrasenaActivo");
    $("#header").addClass("olvidoContrasenaActivo");
    $("#body").addClass("olvidoContrasenaActivo");
    $(".resulOlvidoContrasena").addClass("activo");
    $(".resultadoMenu1").removeClass("activo");
    $(".menuBox").addClass("menuActivo");
  }
});

$(".cerrarMenu").click(function () {
  $(".detonadorMenu").removeClass("activo");
  $(".menuBox").removeClass("menuActivo");
  $(".detonadorRegistro").removeClass("activo");
  $(".registro").removeClass("registroActivo");
  $(".detonadorRecuperar").removeClass("activo");
  $(".olvidoContrasena").removeClass("olvidoContrasenaActivo");
  $(".detonadorTerminos").removeClass("activo");
  $(".terminos").removeClass("terminosActivo");
  $("#header").removeClass("menuActivo");
  $(".item").removeClass("activo");
  $(".box").removeClass("activo");
});

$(".cerrarTerminos").click(function () {
  $(".detonadorTerminos").removeClass("activo");
  $(".terminos").removeClass("terminosActivo");
  $("#header").removeClass("menuActivo");
  $(".item").removeClass("activo");
});

$(".itemMenuRegister").click(function () {
  if ($(this).hasClass("activo") == false) {
    $(".item").removeClass("activo");
    $(".box").removeClass("activo");
    $(this).addClass("activo");
    $(".resultadoMenu1").addClass("activo");
  }
});

$(document).ready(main);

var contador = 1;

function main() {
  $(".menu_bar").click(function () {
    // $('nav').toggle();

    if (contador == 1) {
      $("nav").animate({
        left: "0",
      });
      contador = 0;
    } else {
      contador = 1;
      $("nav").animate({
        left: "-100%",
      });
    }
  });
}

/* custom binding handler by http://www.hughanderson.com/ */
ko.bindingHandlers.slider = {
  init: function (element, valueAccessor) {
    // use setTimeout with 0 to run this after Knockout is done
    setTimeout(function () {
      // $(element) doesn't work as that has been removed from the DOM
      var curSlider = $("#" + element.id);
      // helper function that updates the slider and refreshes the thumb location
      function setSliderValue(newValue) {
        curSlider.val(newValue).slider("refresh");
      }
      // subscribe to the bound observable and update the slider when it changes
      valueAccessor().subscribe(setSliderValue);
      // set up the initial value, which of course is NOT stored in curSlider, but the original element :\
      setSliderValue($(element).val());
      // subscribe to the slider's change event and update the bound observable
      curSlider.bind("change", function () {
        valueAccessor()(curSlider.val());
      });
    }, 0);
  },
};

// https://stackoverflow.com/questions/563406/add-days-to-javascript-date
Date.prototype.addDays = function (days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

// http://www.webdevelopersnotes.com/getting-current-time-using-javascript
// #5
function getDateInRequiredFormat(durationOfBorrow) {
  var d_names = new Array("Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab");

  var m_names = new Array(
    "Ene",
    "Fre",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
  );

  var d = new Date();
  d.addDays(durationOfBorrow);
  //alert(d);
  var curr_day = d.getDay();
  var curr_date = d.getDate();
  var sup = "";
  if (curr_date == 1 || curr_date == 21 || curr_date == 31) {
    sup = "";
  } else if (curr_date == 2 || curr_date == 22) {
    sup = "";
  } else if (curr_date == 3 || curr_date == 23) {
    sup = "";
  } else {
    sup = "";
  }
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();

  return (
    d_names[curr_day] +
    " " +
    curr_date +
    "<SUP>" +
    sup +
    "</SUP> " +
    m_names[curr_month] +
    " " +
    curr_year
  );
}

function AppViewModel() {
  this.currentAmount = ko.observable(200000);
  this.currentPeriod = ko.observable(15);

  this.tillDate = ko.computed(function () {
    return "(" + getDateInRequiredFormat(this.currentPeriod()) + ")";
  }, this);

  this.summaryBorrowed = ko.computed(function () {
    return "Valor Solicitado" + "<separador> $" + this.currentAmount();
  }, this);

  this.interestRepaid = ko.computed(function () {
    return (
      "Intereses" +
      "<separador> $" +
      (((this.currentAmount() * 0.8) / 100) * this.currentPeriod()).toFixed(2)
    );
  }, this);

  this.seguroRepaid = ko.computed(function () {
    return (
      "Seguro" +
      "<separador> $" +
      (((this.currentAmount() * 0.2) / 100) * this.currentPeriod()).toFixed(2)
    );
  }, this);

  this.estudioRepaid = ko.computed(function () {
    return (
      "Estudios" +
      "<separador> $" +
      (((this.currentAmount() * 0.5) / 100) * this.currentPeriod()).toFixed(2)
    );
  }, this);

  this.plataformaRepaid = ko.computed(function () {
    return (
      "Plataforma" +
      "<separador> $" +
      (((this.currentAmount() * 0.1) / 100) * this.currentPeriod()).toFixed(2)
    );
  }, this);

  this.ivaRepaid = ko.computed(function () {
    return (
      "Iva" +
      "<separador> $" +
      (((this.currentAmount() * 0.9) / 100) * this.currentPeriod()).toFixed(2)
    );
  }, this);

  this.totalRepaid = ko.computed(function () {
    var total = (
      this.currentAmount() *
      (1 + (0.8 / 100) * this.currentPeriod())
    ).toFixed(2);
    return "Total a pagar" + "<separador> $" + total;
  }, this);

  this.reducePeriodVal = function () {
    if (parseInt(this.currentPeriod()) > 1) {
      this.currentPeriod(parseInt(this.currentPeriod()) - 1);
    }
  };

  this.increasePeriodVal = function () {
    if (parseInt(this.currentPeriod()) < 35) {
      this.currentPeriod(parseInt(this.currentPeriod()) + 1);
    }
  };

  this.reduceAmountVal = function () {
    if (parseInt(this.currentAmount()) > 50000) {
      this.currentAmount(parseInt(this.currentAmount()) - 10000);
    }
  };

  this.increaseAmountVal = function () {
    if (parseInt(this.currentAmount()) < 900000) {
      this.currentAmount(parseInt(this.currentAmount()) + 10000);
    }
  };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

//https://github.com/stuartchaney/bootstrap3-money-field
$(function () {
  var options = {
    width: 70,
    symbol: "$",
  };
  $(".amount").money_field(options);

  var options2 = {
    width: 50,
    symbol: "Dias",
  };
  $(".period").days_field(options2);
});

(function ($) {
  $.fn.money_field = function (opts) {
    var defaults = { width: null, symbol: "$" };
    var opts = $.extend(defaults, opts);
    return this.each(function () {
      if (opts.width) $(this).css("width", opts.width + "px");
      $(this)
        .wrap("<div class='input-group'>")
        .before("<span class='input-group-addon'>" + opts.symbol + "</span>");
    });
  };

  $.fn.days_field = function (opts) {
    var defaults = { width: null, symbol: "Dias" };
    var opts = $.extend(defaults, opts);
    return this.each(function () {
      if (opts.width) $(this).css("width", opts.width + "px");
      $(this)
        .wrap("<div class='input-group'>")
        .after("<span class='input-group-addon'>" + opts.symbol + "</span>");
    });
  };
})(jQuery);

jQuery(document).ready(function () {
  // click on next button
  jQuery(".form-wizard-next-btn").click(function () {
    var parentFieldset = jQuery(this).parents(".wizard-fieldset");
    var currentActiveStep = jQuery(this)
      .parents(".form-wizard")
      .find(".form-wizard-steps .active");
    var next = jQuery(this);
    var nextWizardStep = true;
    parentFieldset.find(".wizard-required").each(function () {
      var thisValue = jQuery(this).val();

      if (thisValue == "") {
        jQuery(this).siblings(".wizard-form-error").slideDown();
        nextWizardStep = false;
      } else {
        jQuery(this).siblings(".wizard-form-error").slideUp();
      }
    });
    if (nextWizardStep) {
      next.parents(".wizard-fieldset").removeClass("show", "400");
      currentActiveStep
        .removeClass("active")
        .addClass("activated")
        .next()
        .addClass("active", "400");
      next
        .parents(".wizard-fieldset")
        .next(".wizard-fieldset")
        .addClass("show", "400");
      jQuery(document)
        .find(".wizard-fieldset")
        .each(function () {
          if (jQuery(this).hasClass("show")) {
            var formAtrr = jQuery(this).attr("data-tab-content");
            jQuery(document)
              .find(".form-wizard-steps .form-wizard-step-item")
              .each(function () {
                if (jQuery(this).attr("data-attr") == formAtrr) {
                  jQuery(this).addClass("active");
                  var innerWidth = jQuery(this).innerWidth();
                  var position = jQuery(this).position();
                  jQuery(document)
                    .find(".form-wizard-step-move")
                    .css({ left: position.left, width: innerWidth });
                } else {
                  jQuery(this).removeClass("active");
                }
              });
          }
        });
    }
  });
  //click on previous button
  jQuery(".form-wizard-previous-btn").click(function () {
    var counter = parseInt(jQuery(".wizard-counter").text());
    var prev = jQuery(this);
    var currentActiveStep = jQuery(this)
      .parents(".form-wizard")
      .find(".form-wizard-steps .active");
    prev.parents(".wizard-fieldset").removeClass("show", "400");
    prev
      .parents(".wizard-fieldset")
      .prev(".wizard-fieldset")
      .addClass("show", "400");
    currentActiveStep
      .removeClass("active")
      .prev()
      .removeClass("activated")
      .addClass("active", "400");
    jQuery(document)
      .find(".wizard-fieldset")
      .each(function () {
        if (jQuery(this).hasClass("show")) {
          var formAtrr = jQuery(this).attr("data-tab-content");
          jQuery(document)
            .find(".form-wizard-steps .form-wizard-step-item")
            .each(function () {
              if (jQuery(this).attr("data-attr") == formAtrr) {
                jQuery(this).addClass("active");
                var innerWidth = jQuery(this).innerWidth();
                var position = jQuery(this).position();
                jQuery(document)
                  .find(".form-wizard-step-move")
                  .css({ left: position.left, width: innerWidth });
              } else {
                jQuery(this).removeClass("active");
              }
            });
        }
      });
  });
  //click on form submit button
  jQuery(document).on("click", ".form-wizard .form-wizard-submit", function () {
    var parentFieldset = jQuery(this).parents(".wizard-fieldset");
    var currentActiveStep = jQuery(this)
      .parents(".form-wizard")
      .find(".form-wizard-steps .active");
    parentFieldset.find(".wizard-required").each(function () {
      var thisValue = jQuery(this).val();
      if (thisValue == "") {
        jQuery(this).siblings(".wizard-form-error").slideDown();
      } else {
        jQuery(this).siblings(".wizard-form-error").slideUp();
      }
    });
  });
  // focus on input field check empty or not
  jQuery(".form-control")
    .on("focus", function () {
      var tmpThis = jQuery(this).val();
      if (tmpThis == "") {
        jQuery(this).parent().addClass("focus-input");
      } else if (tmpThis != "") {
        jQuery(this).parent().addClass("focus-input");
      }
    })
    .on("blur", function () {
      var tmpThis = jQuery(this).val();
      if (tmpThis == "") {
        jQuery(this).parent().removeClass("focus-input");
        jQuery(this).siblings(".wizard-form-error").slideDown("3000");
      } else if (tmpThis != "") {
        jQuery(this).parent().addClass("focus-input");
        jQuery(this).siblings(".wizard-form-error").slideUp("3000");
      }
    });
});
