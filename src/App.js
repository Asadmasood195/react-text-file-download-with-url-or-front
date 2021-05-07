import "./styles.css";
import DownloadLink from "react-download-link";
export default function App() {
  const url =
    "https://dr-porter-dev.azurewebsites.net/api/v1/order/attachment/1/";
  const getDataFromURL = (url) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then((response) => response.text())
          .then((data) => {
            resolve(data);
          });
      });
    }, 2000);
  return (
    <div className="App">
      <DownloadLink
        label="Download txt file"
        filename="fileName.txt"
        exportFile={() => "Client side cache data here…"}
      />
      <br />
      <DownloadLink
        label="Download with Promise"
        filename="fileName.txt"
        exportFile={() => Promise.resolve("cached data here …")}
      />
      <br />
      <DownloadLink
        label="Download with fetch url"
        filename="filename.txt"
        exportFile={() => Promise.resolve(getDataFromURL(url))}
      />
    </div>
  );
}
