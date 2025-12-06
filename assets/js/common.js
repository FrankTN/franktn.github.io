$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // Generate table of contents for beginning TOC
  if ($("#table-of-contents").length) {
    var tocContainer = $("#table-of-contents");
    var markdownContent = $("#markdown-content");
    
    if (markdownContent.length) {
      var headings = markdownContent.find("h1, h2, h3, h4, h5, h6");
      var tocList = $("<ul></ul>");
      var stack = [{ list: tocList, level: 0 }];
      
      headings.each(function(index) {
        var heading = $(this);
        var level = parseInt(heading.prop("tagName").substring(1));
        var text = heading.text();
        
        // Generate ID if not present
        var id = heading.attr("id");
        if (!id) {
          id = text.toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
          
          // Ensure unique ID
          var originalId = id;
          var counter = 1;
          while ($("#" + id).length > 0) {
            id = originalId + "-" + counter;
            counter++;
          }
          
          heading.attr("id", id);
        }
        
        // Find the appropriate parent list in the stack
        while (stack.length > 1 && stack[stack.length - 1].level >= level) {
          stack.pop();
        }
        
        var parentStack = stack[stack.length - 1];
        var parentList = parentStack.list;
        
        // Check if next heading is deeper (to decide if we need nested list)
        var nextHeading = headings.eq(index + 1);
        var nextLevel = nextHeading.length ? parseInt(nextHeading.prop("tagName").substring(1)) : 0;
        var needsNested = nextLevel > level;
        
        // Create list item
        var listItem = $("<li></li>");
        var link = $("<a></a>").attr("href", "#" + id).text(text);
        listItem.append(link);
        parentList.append(listItem);
        
        // If next heading is deeper, create nested list and push to stack
        if (needsNested) {
          var nestedList = $("<ul></ul>");
          listItem.append(nestedList);
          stack.push({ list: nestedList, level: level });
        }
      });
      
      if (tocList.children().length > 0) {
        tocContainer.append(tocList);
      }
    }
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let theme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });
});
