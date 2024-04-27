import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Pdf = () => {
  return (
    <div>
      <div className="my-[70px]">
        <iframe
          src={
            "https://drive.google.com/file/d/11ajfmDNI2lpJ5cGZF2hErXIXh3fIWxhn/view?usp=sharing"
          }
          width="100%"
          style={{ border: "none", height: "80vh" }}
          sandbox="allow-scripts allow-same-origin"
          onContextMenu={(e) => e.preventDefault()}
        ></iframe>
      </div>
    </div>
  );
};

export default Pdf;
