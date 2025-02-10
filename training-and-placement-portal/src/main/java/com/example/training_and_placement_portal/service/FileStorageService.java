package com.example.training_and_placement_portal.service;

import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.model.GridFSUploadOptions;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Service
public class FileStorageService {
	@Autowired
    private GridFSBucket gridFSBucket;

    public String storeFile(MultipartFile file) throws IOException {
        InputStream inputStream = file.getInputStream();
        GridFSUploadOptions options = new GridFSUploadOptions().metadata(null);
        ObjectId fileId = gridFSBucket.uploadFromStream(file.getOriginalFilename(), inputStream, options);
        return fileId.toHexString();
    }

    public InputStream getFile(String fileId) {
        return gridFSBucket.openDownloadStream(new ObjectId(fileId));
    }

    public void deleteFile(String fileId) {
        gridFSBucket.delete(new ObjectId(fileId));
    }
}
