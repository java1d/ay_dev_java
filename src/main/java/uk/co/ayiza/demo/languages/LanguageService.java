package uk.co.ayiza.demo.languages;

import uk.co.ayiza.demo.model.Language;

import java.util.List;

/**
 * Created by rtai on 15/11/2017.
 */
public interface LanguageService {

    List<Language> getLanaguagesList();

    List<Language> findByCode(String code);

    Language getLanguage(Long id);

    Language updateLanguage(Language language);

    Language saveLanguage(Language language);

    void removeLanguage(Long id);

}
