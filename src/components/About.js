import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import pythonIcon from "@iconify/icons-logos/python";
import javascriptIcon from "@iconify/icons-logos/javascript";

class About extends Component {
  render() {
    const { sharedBasicInfo, resumeBasicInfo } = this.props;
    const profilepic = sharedBasicInfo ? "images/" + sharedBasicInfo.image : "";
    const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : "";
    const hello = resumeBasicInfo ? resumeBasicInfo.description_header : "";
    const about = resumeBasicInfo ? resumeBasicInfo.description : "";

    return (
      <section
        id="about"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#2c2c2c",
          backgroundColor: "#f9fafb",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontSize: "2.4rem",
            marginBottom: "0",
            textAlign: "center",
            color: "#111",
            letterSpacing: "1.2px",
          }}
        >
          {sectionName}
        </h2>

        <div
          style={{
            display: "flex",
            gap: "5rem",
            alignItems: "stretch",
            justifyContent: "center",
            flexWrap: "wrap", // wrap on smaller screens
          }}
        >
          {/* Profile Box */}
          <div
            style={{
              flex: "1 1 300px",
              maxWidth: "250px",
              backgroundColor: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              padding: "1rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "250px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={profilepic}
              alt="Avatar"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
                fontSize: "3rem",
                marginTop: "1rem",
              }}
            >
              <Icon icon={javascriptIcon} style={{ color: "#f7df1e" }} />
              <Icon icon={reactIcon} style={{ color: "#61dafb" }} />
              <Icon icon={pythonIcon} style={{ color: "#306998" }} />
            </div>
          </div>

          {/* Text Box */}
          <div
            style={{
              flex: "2 1 500px",
              backgroundColor: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              padding: "2rem",
              fontSize: "1.25rem",
              lineHeight: "1.8",
              color: "#3a3a3a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: "250px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  backgroundColor: "#ff5f56",
                  borderRadius: "50%",
                  width: "14px",
                  height: "14px",
                  display: "inline-block",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: "#ffbd2e",
                  borderRadius: "50%",
                  width: "14px",
                  height: "14px",
                  display: "inline-block",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: "#27c93f",
                  borderRadius: "50%",
                  width: "14px",
                  height: "14px",
                  display: "inline-block",
                }}
              ></span>
            </div>
            <p style={{ fontWeight: "700", marginBottom: "1rem" }}>
              {hello} <span role="img" aria-label="wave">👋</span>
            </p>
            <p style={{ color: "#555", whiteSpace: "pre-line" }}>{about}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
