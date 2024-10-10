import server from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize()
    .then( res => {
        console.log("Connection to database successful");
        server.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`);
        });
    })

