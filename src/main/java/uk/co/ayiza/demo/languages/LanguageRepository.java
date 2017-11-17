package uk.co.ayiza.demo.languages;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import uk.co.ayiza.demo.model.Language;

import java.util.List;

/**
 * Created by rtai on 27/10/2017.
 */
@RestResource(path = "languages", rel = "languages")
public interface LanguageRepository extends CrudRepository<Language, Long> {

    List<Language> findByCode(String code);
}
