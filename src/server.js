import { createServer, Model } from "miragejs";
import { MOCK_REQUEST } from "./MOCK_DATA";
export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        routes() {
            this.get("/note", (schema, request) => {
                return MOCK_REQUEST;
            });
            this.post("/addnote", (schema, request) => {
                alert("Data was sending");
                return "OK";
            });
        },
    });
    return server;
}
