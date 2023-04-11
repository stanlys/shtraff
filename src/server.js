import { createServer, Model } from "miragejs";
import { MOCK_REQUEST } from "./MOCK_DATA";
export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        routes() {
            this.get("/note", (schema, request) => {
                return MOCK_REQUEST;
            });
        },
    });
    return server;
}
