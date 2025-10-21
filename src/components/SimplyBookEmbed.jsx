import React, { useEffect, useRef } from "react";
const SimplyBookEmbed = () => {
  const widgetContainerRef = useRef(null);
  const widgetInstanceRef = useRef(null);

  useEffect(() => {
    // Create a unique ID for this widget instance
    const containerId = `simplybook-container-${Date.now()}`;
    if (widgetContainerRef.current) {
      widgetContainerRef.current.id = containerId;
    }

    const initializeWidget = () => {
      if (
        typeof window.SimplybookWidget === "function" &&
        widgetContainerRef.current
      ) {
        // Destroy previous instance if exists
        if (widgetInstanceRef.current) {
          try {
            widgetInstanceRef.current.destroy?.();
          } catch (e) {
            console.log("Could not destroy previous widget instance");
          }
        }

        // Create new widget instance with the container specified
        widgetInstanceRef.current = new window.SimplybookWidget({
          widget_type: "iframe",
          url: "https://twenty44.simplybook.me",
          theme: "default",
          theme_settings: {
            timeline_hide_unavailable: "1",
            hide_past_days: "0",
            timeline_show_end_time: "1",
            timeline_modern_display: "as_slots",
            sb_base_color: "#2d4d31",
            display_item_mode: "block",
            booking_nav_bg_color: "#f1f1f1",
            body_bg_color: "#f1f1f1",
            sb_review_image: "",
            dark_font_color: "#2d4d31",
            light_font_color: "#f5fcff",
            btn_color_1: "#2d4d31",
            sb_company_label_color: "#f1f1f1",
            hide_img_mode: "1",
            show_sidebar: "1",
            sb_busy: "#c7b3b3",
            sb_available: "#d6ebff",
          },
          timeline: "modern",
          datepicker: "top_calendar",
          is_rtl: false,
          app_config: {
            clear_session: 0,
            allow_switch_to_ada: 0,
            predefined: [],
          },
          // Try to specify the container ID
          container_id: containerId,
        });
      }
    };

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src*="widget.simplybook.me"]',
    );

    if (existingScript || window.SimplybookWidget) {
      // Script already loaded
      initializeWidget();
    } else {
      // Load the script
      const simplybookScript = document.createElement("script");
      simplybookScript.src = "//widget.simplybook.me/v2/widget/widget.js";
      simplybookScript.type = "text/javascript";
      simplybookScript.async = true;
      simplybookScript.onload = initializeWidget;
      document.body.appendChild(simplybookScript);
    }

    // Cleanup
    return () => {
      if (widgetInstanceRef.current) {
        try {
          widgetInstanceRef.current.destroy?.();
        } catch (e) {
          console.log("Cleanup: Could not destroy widget instance");
        }
      }
    };
  }, []);

  return (
    <div
      ref={widgetContainerRef}
      className="simplybook-widget-container"
      style={{
        height: "100%",
        width: "100vw",
        position: "relative",
        zIndex: 1,
      }}
    />
  );
};

export default SimplyBookEmbed;
