/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianLineCommands
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var ObsidianLineCommands = class extends import_obsidian.Plugin {
  async onload() {
    this.addCommand({
      id: "select-lines",
      name: "Select lines",
      icon: "text-cursor-input",
      editorCallback: async (editor) => {
        const startLine = editor.getCursor("from").line;
        const endLine = editor.getCursor("to").line;
        const endLineCh = editor.getLine(endLine).length;
        const rangeStart = { line: startLine, ch: 0 };
        const rangeEnd = { line: endLine, ch: endLineCh };
        editor.setSelection(rangeStart, rangeEnd);
      }
    });
    this.addCommand({
      id: "copy-lines",
      name: "Copy lines",
      icon: "copy-minus",
      editorCallback: async (editor) => {
        const startLine = editor.getCursor("from").line;
        const endLine = editor.getCursor("to").line;
        const endLineCh = editor.getLine(endLine).length;
        const rangeStart = { line: startLine, ch: 0 };
        const rangeEnd = { line: endLine, ch: endLineCh };
        const text = editor.getRange(rangeStart, rangeEnd);
        this.copyToClipboard(text);
      }
    });
    this.addCommand({
      id: "cut-lines",
      name: "Cut lines",
      icon: "scissors-line-dashed",
      editorCallback: async (editor) => {
        const startLine = editor.getCursor("from").line;
        const endLine = editor.getCursor("to").line;
        const endLineCh = editor.getLine(endLine).length;
        const rangeStart = { line: startLine, ch: 0 };
        const rangeEnd = { line: endLine, ch: endLineCh };
        const text = editor.getRange(rangeStart, rangeEnd);
        const rangeEndNextLine = { line: endLine + 1, ch: 0 };
        editor.replaceRange("", rangeStart, rangeEndNextLine);
        this.copyToClipboard(text);
      }
    });
    this.addCommand({
      id: "paste-before-line",
      name: "Paste before line",
      icon: "clipboard-copy",
      editorCallback: async (editor) => {
        const currentLine = editor.getCursor("from").line;
        const currentText = editor.getLine(currentLine);
        const clipboardText = await navigator.clipboard.readText();
        editor.setLine(currentLine, clipboardText + "\n" + currentText);
      }
    });
    this.addCommand({
      id: "paste-after-line",
      name: "Paste after line",
      icon: "clipboard-paste",
      editorCallback: async (editor) => {
        const currentLine = editor.getCursor("from").line;
        const currentText = editor.getLine(currentLine);
        const clipboardText = await navigator.clipboard.readText();
        editor.setLine(currentLine, currentText + "\n" + clipboardText);
      }
    });
  }
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
      new import_obsidian.Notice("Unable to copy lines to clipboard.");
    }
  }
};
