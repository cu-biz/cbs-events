import Session from "/admin/preview-templates/sessions.js";
import Speaker from "/admin/preview-templates/speakers.js";
import Sponsor from "/admin/preview-templates/sponsors.js";

// Register the component as the preview for entries in the collections
CMS.registerPreviewTemplate("sessions", Session);
CMS.registerPreviewTemplate("speakers", Speaker);
CMS.registerPreviewTemplate("sponsors", Sponsor);

CMS.registerPreviewStyle("/preview.css");
// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });