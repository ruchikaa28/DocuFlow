package com.docuflow.backend.controller;

import com.docuflow.backend.model.Document;
import com.docuflow.backend.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/documents")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DocumentController {

    private final DocumentService documentService;

    @PostMapping("/upload")
    public org.springframework.http.ResponseEntity<?> upload(@RequestParam("file") MultipartFile file,
                                                            @RequestParam("owner") String owner) {
        try {
            Document saved = documentService.upload(file, owner);
            return org.springframework.http.ResponseEntity.ok(saved);
        } catch (Exception e) {
            // log and return an informative error response
            System.err.println("Upload failed: " + e.getMessage());
            e.printStackTrace();
            return org.springframework.http.ResponseEntity
                    .status(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(java.util.Map.of("error", "Upload failed", "details", e.getMessage()));
        }
    }

    @GetMapping
    public List<Document> getAll() {
        return documentService.getAll();
    }
}
