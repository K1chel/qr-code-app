import { useState } from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import QRCode from "qrcode";

const Form = () => {
  const [value, setValue] = useState("");
  const [srcResult, setSrcResult] = useState("");

  const disabled = value === "";

  const generateCode = () => {
    QRCode.toDataURL(
      value,
      {
        width: 250,
        margin: 2,
        color: {
          dark: "#333",
          light: "#FFFFFF00",
        },
      },
      (err, url) => {
        if (err) return console.log(err);

        console.log(url);
        setSrcResult(url);
      }
    );
  };

  return (
    <div className="flex items-center justify-center h-screen max-w-xl mx-auto flex-col gap-y-5">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Turn your link to QRcode</h1>
        <p className="text-sm text-muted-foreground max-w-[300px]">
          It's free and easy to use, no registration required!{" "}
          <span className="underline">
            Feel free to use it for your personal or commercial projects.
          </span>
        </p>
      </div>
      <div className="flex w-full px-10 flex-col gap-y-3">
        <input
          placeholder="Enter your link here"
          className="border w-full py-2 px-1.5 rounded-lg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={generateCode} size="lg" disabled={disabled}>
          Generate
        </Button>
      </div>
      <div className="w-full">
        {srcResult ? (
          <>
            <div className="w-full flex items-center justify-center mt-5">
              <img src={srcResult} alt="code" />
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              <Button
                className="w-1/3 relative group active:scale-90 transition-all duration-300"
                variant="outline"
                asChild
              >
                <a href={srcResult} download="qrcode.png">
                  Download
                  <Download className="w-5 h-5 ml-2 group-hover:scale-90 transition-all" />
                </a>
              </Button>
            </div>
          </>
        ) : (
          <div className="w-full flex items-center justify-center mt-5">
            <div className="h-[250px] w-[250px] border rounded-md bg-gray-300 animate-pulse flex items-center justify-center">
              <p className="text-sm">Your QR would be here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
