package com.docuflow.backend.model;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Data
@org.springframework.data.mongodb.core.mapping.Document(collection = "documents")
public class Document {
    @Id
    private String id;
    private String fileName;
    private String owner;
    private String fileType;
    private byte[] content;
}
