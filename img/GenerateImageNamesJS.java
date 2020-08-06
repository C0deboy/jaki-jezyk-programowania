package utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class GenerateImageNamesJS {
    private static final File currentFolder = new File("./");
    private static final List<File> imageFolders = List.of(
        new File("technologies"),
        new File("wizard")
    );

    public static void main(String[] args) throws FileNotFoundException {
        String jsFileName = "imagesNames";

        System.out.println("Working dir: " + currentFolder.getAbsolutePath());
        generateJsArrayWithFileNames(jsFileName);
        System.out.println("Generated file: " + jsFileName + ".js");
    }

    public static void generateJsArrayWithFileNames(String fileName) throws FileNotFoundException {
        System.setProperty("line.separator", "\n");
        PrintWriter jsFile = new PrintWriter(currentFolder.getPath() + "\\" + fileName + ".js");
        List<String> imageNames = readImageNames();

        jsFile.println("const " + fileName + " = [");
        for (String path : imageNames) {
            jsFile.println("  '" + path + "',");
        }
        jsFile.println("];");
        jsFile.println("export default " + fileName + ";");

        jsFile.close();
    }

    public static List<String> readImageNames() {
        List<String> imageNames = new ArrayList<>();

        List<File> files = imageFolders.stream()
            .flatMap(folder -> Stream.of(Objects.requireNonNull(folder.listFiles())))
            .collect(Collectors.toList());

        for (File file : files) {

            String filePath = file.getParent() + "/" + file.getName();

            if (file.isFile() && filePath.endsWith(".png")) {
                imageNames.add(filePath);
            }
        }

        return imageNames;
    }
}