import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import { Button } from "./Components/ui/button";


function App() {
  const [data, setData] = useState({
    text: "hello",
    color: "",
    size: 200,
  });
  const [QR, setQR] = useState();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "color") {
      setData({ ...data, [name]: value.substring(1) });
      return;
    }
    setData({ ...data, [name]: value });
  }
  useEffect(() => {
    setQR(
      `http://api.qrserver.com/v1/create-qr-code/?data=${data.text}!&size=${data.size}x${data.size}&bgcolor=${data.color}`
    );
  }, [data.color, data.size]);

  function handleSubmit() {
    setQR(
      `http://api.qrserver.com/v1/create-qr-code/?data=${data.text}!&size=${data.size}x${data.size}&bgcolor=${data.color}`
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        QR Code Generator of Text
      </h1>
      <div className="p-10 flex justify-center items-center">
        <Input
          label=""
          name="text"
          type="text"
          placeholder="hello"
          onChange={(e) => handleChange(e)}
          className="border-2 border-black p-3 text-base rounded-none"
        />
        <Button
          className="py-6 rounded-none text-base h-[51.05px]"
          onClick={handleSubmit}
        >
          Generate
        </Button>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Input
          label="Background Color"
          type="color"
          name="color"
          onChange={handleChange}
          placeholder=""
          className="border-2 border-black p-3 text-base rounded-none"
        />
        <Input
          label="Dimension"
          type="range"
          name="size"
          value={data.size}
          onChange={handleChange}
          min="100"
          max="250"
          placeholder=""
          className="border-2 border-black text-base rounded-none"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-[300px] h-[300px]  flex justify-center items-center">
          <img src={QR} alt="" title="" />
        </div>
        <a href={QR} download="QRCode.png">
          <Button className="rounded-none">Download</Button>
        </a>
      </div>
    </div>
  );
}

export default App;
