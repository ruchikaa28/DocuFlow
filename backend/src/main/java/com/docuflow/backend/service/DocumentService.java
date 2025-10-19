package com.docuflow.backend.service;

import com.docuflow.backend.model.Document;
import com.docuflow.backend.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DocumentService {

    private final DocumentRepository repository;

    public Document upload(MultipartFile file, String owner) throws IOException {
        Document doc = new Document();
        doc.setFileName(file.getOriginalFilename());
        doc.setOwner(owner);
        doc.setFileType(file.getContentType());
        doc.setContent(file.getBytes());
        return repository.save(doc);
    }

    public List<Document> getAll() {
        return repository.findAll();
    }
}
