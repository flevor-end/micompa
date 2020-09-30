$("#applyBtn").on("click", function () {
  alert("Thanks for viewing!");
});

$(".detonadorMenu").click(function () {
  if ($(this).hasClass("activo")) {
    $(this).removeClass("activo");
    $(".menuBox").removeClass("menuActivo");
    $("#header").removeClass("menuActivo");
    $("#body").removeClass("menuActivo");
    $(".item").removeClass("activo");
    $(".box").removeClass("activo");
    $(".resultadoMenu1").removeClass("activo");
    $(".categoriaN1").removeClass("activo");
  } else {
    $(this).addClass("activo");
    $(".menuBox").addClass("menuActivo");
    $("#header").addClass("menuActivo");
    $("#body").addClass("menuActivo");
    $(".itemMenuRegister").addClass("activo");
    $(".resultadoMenu1").addClass("activo");
  }
});
$(".cerrarMenu").click(function () {
  $(".detonadorMenu").removeClass("activo");
  $(".menuBox").removeClass("menuActivo");
  $("#header").removeClass("menuActivo");
  $(".item").removeClass("activo");
  $(".box").removeClass("activo");
});

$(".itemMenuRegister").click(function () {
  if ($(this).hasClass("activo") == false) {
    $(".item").removeClass("activo");
    $(".box").removeClass("activo");
    $(this).addClass("activo");
    $(".resultadoMenu1").addClass("activo");
  }
});

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
  var d_names = new Array(
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  );

  var m_names = new Array(
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembr",
    "Diciembre"
  );

  var d = new Date();
  d.addDays(durationOfBorrow);
  //alert(d);
  var curr_day = d.getDay();
  var curr_date = d.getDate();
  var sup = "";
  if (curr_date == 1 || curr_date == 21 || curr_date == 31) {
    sup = "st";
  } else if (curr_date == 2 || curr_date == 22) {
    sup = "nd";
  } else if (curr_date == 3 || curr_date == 23) {
    sup = "rd";
  } else {
    sup = "th";
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
    return "Prestamo" + "<br> $" + this.currentAmount();
  }, this);

  this.interestRepaid = ko.computed(function () {
    return (
      "Intereses" +
      "<br> $" +
      (((this.currentAmount() * 0.8) / 100) * this.currentPeriod()).toFixed(2)
    );
  }, this);

  this.totalRepaid = ko.computed(function () {
    var total = (
      this.currentAmount() *
      (1 + (0.8 / 100) * this.currentPeriod())
    ).toFixed(2);
    return "Total a pagar" + "<br> $" + total;
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
