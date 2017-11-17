package uk.co.ayiza.demo.currencies;

import uk.co.ayiza.demo.model.Currency;

import java.util.List;

/**
 * Created by rtai on 16/11/2017.
 */
public interface CurrencyService {

    List<Currency> getCurrenciesList();

    Currency getCurrency(Long id);

    Currency updateCurrency(Currency currency);

    Currency saveCurrency(Currency currency);

    void removeCurrency(Long id);


}
