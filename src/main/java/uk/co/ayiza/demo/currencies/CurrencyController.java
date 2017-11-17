package uk.co.ayiza.demo.currencies;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import uk.co.ayiza.demo.languages.LanguageService;
import uk.co.ayiza.demo.model.Currency;
import uk.co.ayiza.demo.model.Language;

import java.util.List;

/**
 * Created by rtai on 16/11/2017.
 */
@Controller
@RequestMapping(value = "/configmgr/currencies")
public class CurrencyController {

    private static final Logger logger = LoggerFactory.getLogger(CurrencyController.class);

    private static String VIEW_LOG_MSG = "returning {} view";

    @Autowired
    private CurrencyService currencyService;

    @Autowired
    private LanguageService languageService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String currencies(Model model) {
        logger.info(VIEW_LOG_MSG, "currencies");
        List<Currency> currencies = currencyService.getCurrenciesList();
        logger.debug("currencies "+currencies.size());
        String msg = "Currency {}, {}, {}";
        currencies.stream().forEach(currency -> logger.debug(msg, currency.getId(), currency.getCode(), currency.getText()));
        model.addAttribute("currencies",currencies);
        return "config/currencies";
    }


    @RequestMapping(value = "/edit")
    public String currencyEdit(@RequestParam Long id, Model model) {
        logger.info(VIEW_LOG_MSG, "currencies/edit "+id);
        Currency currency = currencyService.getCurrency(id);
        logger.debug("currency "+currency);
        model.addAttribute("currency",currency);
        model.addAttribute("pageMode","edit");
        return "config/currencies_edit";
    }

    @RequestMapping(value = "/add")
    public String currencyAdd(Model model) {
        logger.info(VIEW_LOG_MSG, "currencies/add");
        model.addAttribute("pageMode","add");
        List<Language> languages = languageService.getLanaguagesList();
        model.addAttribute("languages", languages);
        return "config/currencies_add";
    }

    /*
     * REST API calls for update and delete
     */

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody String save(@RequestBody Currency currency) {
        logger.info("save new currency "+currency);
        Currency savedCurrency = currencyService.saveCurrency(currency);
        return Long.toString(savedCurrency.getId());
    }

    @RequestMapping(value = "", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody String update(@RequestBody Currency currency) {
        logger.info("update existing currency "+currency);
        if(currency.getLanguage() == null) {
            throw new IllegalArgumentException("currency.language cannot be null");
        }
        Currency updatedCurrency = currencyService.updateCurrency(currency);
        return Long.toString(updatedCurrency.getId());
    }

    @RequestMapping(value = "", method = RequestMethod.DELETE)
    public String delete(@RequestParam Long id, Model model) {
        logger.info("delete existing currency "+id);
        currencyService.removeCurrency(id);
        return "config/currencies";
    }
}
