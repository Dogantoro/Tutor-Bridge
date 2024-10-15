# TutorBridge

## To run with IntelliJ
1. Go to **Edit Configurations** in the dropdown next to the run button
2. In the Run/Debug Configurations window, click the + icon in the top left and select **Maven** from the list.
3. Ensure working directory points to project root
4. Under **Command Line**, enter ```spring-boot:run```
5. Next to Java options, click the gear icon and ensure **Environment Variables** is selected
6. Under Java Options, in the **Environment Variables** field, enter ```DB_USERNAME=<YOUR POSTGRES USERNAME>, DB_PASSWORD=<YOUR POSTGRES PASSWORD>```, making sure to enter *your* postgres username and password for the ```TutorBridge``` database
7. You can now run the server by clicking the run icon from any file

## To run with VSCode
1. Make sure **Java Extension Pack** and **Spring Boot Extension Pack** are installed
2. Go to the **Run and Debug** tab on the sidebar
3. Click **Create a launch.json file**, and then select java (what you select here doesn't really matter, because the next step contains the full launch.json file. So, optionally, you can directly create the launch.json file in the path ```.vscode/launch.json```)
4. Delete any code in this file and paste the following

        {
        "version": "0.2.0",
        "configurations": [
                {
                "type": "java",
                "request": "launch",
                "name": "Run Spring Boot with Maven",
                "runtimeExecutable": "mvn",
                "args": [
                        "spring-boot:run"
                ],
                "env": {
                        "DB_USERNAME": "<YOUR POSTGRES USERNAME>",
                        "DB_PASSWORD": "<YOUR POSTGRES PASSWORD>"
                },
                "console": "integratedTerminal",
                "cwd": "${workspaceFolder}"
                }
        ]
        }
5. Make sure to save
6. You can now run the server by clicking ```Run Spring Boot with Maven``` in the **Run and Debug** tab in the sidebar 

## To set up Postgres locally
1. Ensure postgres and PGAdmin is installed, if not you can download from https://www.postgresql.org/download/
2. If you're going to use the default user ```postgres```, set a password for it, and add it as an environment variable according to instructions above
3. Create DB ```TutorBridge```, and set a user that can be anything, but by default you can use ```postgres```