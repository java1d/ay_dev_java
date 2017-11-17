package uk.co.ayiza.demo.languages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.ayiza.demo.model.Language;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by rtai on 15/11/2017.
 */
@Service
public class LanguageServiceImpl implements LanguageService {

    @Autowired
    private LanguageRepository languageRepository;

    @Override
    public List<Language> getLanaguagesList() {
        List<Language> languageList = new ArrayList<>();
        languageRepository.findAll().forEach(language -> languageList.add(language));
        return languageList;
    }

    @Override
    public List<Language> findByCode(String code) {
        return languageRepository.findByCode(code);
    }

    @Override
    public Language getLanguage(Long id) {
        return languageRepository.findOne(id);
    }

    @Override
    public Language updateLanguage(Language language) {
        return languageRepository.save(language);
    }

    @Override
    public Language saveLanguage(Language language) {
        return languageRepository.save(language);
    }

    @Override
    public void removeLanguage(Long id) {
        languageRepository.delete(id);
    }
}
