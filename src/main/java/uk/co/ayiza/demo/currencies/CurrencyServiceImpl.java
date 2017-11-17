package uk.co.ayiza.demo.currencies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.ayiza.demo.model.Currency;

import java.util.List;

/**
 * Created by rtai on 16/11/2017.
 */
@Service
public class CurrencyServiceImpl implements CurrencyService {

    @Autowired
    private CurrencyRepository currencyRepository;

    @Override
    public List<Currency> getCurrenciesList() {
        return currencyRepository.findAll();
    }

    @Override
    public Currency getCurrency(Long id) {
        return currencyRepository.findOne(id);
    }

    @Override
    public Currency updateCurrency(Currency currency) {
        return currencyRepository.save(currency);
    }

    @Override
    public Currency saveCurrency(Currency currency) {
        return currencyRepository.save(currency);
    }

    @Override
    public void removeCurrency(Long id) {
        currencyRepository.delete(id);
    }
}
