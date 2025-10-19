package com.docuflow.backend.repository;

import com.docuflow.backend.model.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DocumentRepository extends MongoRepository<Document, String> {}
