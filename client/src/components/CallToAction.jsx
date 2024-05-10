import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to read more?</h2>
        <p className="text-gray-500 my-2">Check my website as well</p>
        <Button
          className="rounded-tl-xl rounded-bl none"
          gradientDuoTone="purpleToPink"
        >
          <a
            href="https://www.attimi.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Attimi
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.bVFvfTdGZDIzhHHf95L6JQHaEn%26pid%3DApi&f=1&ipt=9451edc229fd362000bf9e8eee489c6d4678f5a4e0c51ce206b335353c2dfd8f&ipo=images" />
      </div>
    </div>
  );
}
