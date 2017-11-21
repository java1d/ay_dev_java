package uk.co.ayiza.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import uk.co.ayiza.demo.currencies.CurrencyRepository;
import uk.co.ayiza.demo.languages.LanguageRepository;
import uk.co.ayiza.demo.model.Currency;
import uk.co.ayiza.demo.model.Language;

import java.util.Locale;

/**
 * Created by rtai on 27/10/2017.
 */
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final LanguageRepository languageRepository;

    private final CurrencyRepository currencyRepository;

    @Autowired
    public DatabaseLoader(LanguageRepository languageRepository, CurrencyRepository currencyRepository) {
        this.languageRepository = languageRepository;
        this.currencyRepository = currencyRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        if(languageRepository.count() != 4) {
            this.languageRepository.save(new Language(Locale.UK));
            this.languageRepository.save(new Language(Locale.GERMANY));
            this.languageRepository.save(new Language(Locale.FRANCE));
            this.languageRepository.save(new Language(Locale.ITALY));
            this.currencyRepository.save(new Currency(languageRepository.findOne(1L),"GBP","British Pound"));
            this.currencyRepository.save(new Currency(languageRepository.findOne(2L),"EUR","Euro"));
            this.currencyRepository.save(new Currency(languageRepository.findOne(3L),"EUR","Euro"));
            this.currencyRepository.save(new Currency(languageRepository.findOne(4L),"EUR","Euro"));
        }
    }
}
