package utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class GenerateImageNamesJS {
    private File folder;

    public static void main(String[] args) throws FileNotFoundException {
        File cssFolder = new File("./");
        String jsFileName = "imagesNames";

        GenerateImageNamesJS assets = new GenerateImageNamesJS(cssFolder);
        System.out.println("Working dir: " + cssFolder.getAbsolutePath());
        assets.generateJsArrayWithFileNames(jsFileName);
        System.out.println("Success!\nFile: " + jsFileName + ".js");
    }

    public GenerateImageNamesJS(File folder) {
        this.folder = folder;
    }

    public List<String> readFileNames() {
        List<String> fileNames = new ArrayList<>();

        for (File file : Objects.requireNonNull(folder.listFiles())) {
            String filename = file.getName();

            if (file.isFile() && filename.endsWith(".png")) {
                fileNames.add(filename);
            }
        }

        return fileNames;
    }

    public void generateJsArrayWithFileNames(String fileName) throws FileNotFoundException {
        PrintWriter jsFile = new PrintWriter(this.folder.getPath() + "\\" + fileName + ".js");
        List<String> filePaths = readFileNames();

        jsFile.println("const " + fileName + " = [");
        for (String path : filePaths) {
            jsFile.println("  '" + path + "', ");
        }
        jsFile.println("];");
        jsFile.println("export default " + fileName);

        jsFile.close();
    }
}