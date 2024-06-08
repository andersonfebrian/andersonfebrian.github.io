import * as pdfjsLib from "pdfjs-dist";

if (typeof window !== "undefined" && "Worker" in window) {
    pdfjsLib.PDFJS.workerPort = new Worker();
}


