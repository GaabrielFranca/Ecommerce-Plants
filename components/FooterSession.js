import React from "react";

const FooterSession = ({ title, ...p }) => {
  const [paragraph, setParagraph] = React.useState([]);

  const propPack = {
    paragraphs: [p],
  };

  React.useState(() => {
    let paragraphs = propPack.paragraphs.map((para) => {
      const values = Object.values(para);
      setParagraph(values);
    });
  }, []);

  return (
    <>
      <div className="space-y-2 text-xs text-white">
        <h1 className="font-bold">{title}</h1>
        {paragraph?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
};

export default FooterSession;
