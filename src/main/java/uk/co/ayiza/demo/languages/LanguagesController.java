package uk.co.ayiza.demo.languages;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import uk.co.ayiza.demo.model.Language;

import java.util.List;

/**
 * Created by rtai on 15/11/2017.
 */
@Controller
@RequestMapping(value = "/configmgr/languages")
public class LanguagesController {

    private static final Logger logger = LoggerFactory.getLogger(LanguagesController.class);

    private static String VIEW_LOG_MSG = "returning {} view";

    private static String METHOD_LOG_MSG = "invoking {}";


    @Autowired
    private LanguageService languageService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String languages(Model model) {
        logger.info(VIEW_LOG_MSG, "languages");
        List<Language> languages = languageService.getLanaguagesList();
        logger.debug("languages "+languages.size());
        String msg = "Language {}, {}, {}";
        languages.stream().forEach(language -> logger.debug(msg, language.getId(), language.getCode(), language.getText()));
        model.addAttribute("languages",languages);
        return "config/languages";
    }

    @RequestMapping(value = "/edit")
    public String languageEdit(@RequestParam Long id, Model model) {
        logger.info(VIEW_LOG_MSG, "languages/edit "+id);
        Language language = languageService.getLanguage(id);
        logger.debug("language "+language);
        model.addAttribute("language",language);
        model.addAttribute("pageMode","edit");
        return "config/languages_edit";
    }

    @RequestMapping(value = "/add")
    public String languageAdd(Model model) {
        logger.info(VIEW_LOG_MSG, "languages/add");
        model.addAttribute("pageMode","add");
        return "config/languages_add";
    }

    /*
     * REST API calls for creating, retrieving, updating and deleting
     */
    @RequestMapping(value = "", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody String save(@RequestBody Language language) {
        logger.info("save new language "+language.getCode());
        Language savedLanguage = languageService.saveLanguage(language);
        return Long.toString(savedLanguage.getId());
    }

    @RequestMapping(value = "search", method = RequestMethod.GET)
    public @ResponseBody List<Language> searchByCode(@RequestParam String code) {
        logger.debug(METHOD_LOG_MSG, "searchByCode");
        List<Language> languages = languageService.findByCode(code);
        logger.debug("languages "+languages.size());
        String msg = "Language {}, {}, {}";
        languages.stream().forEach(language -> logger.debug(msg, language.getId(), language.getCode(), language.getText()));
        return languages;
    }

    @RequestMapping(value = "", method = RequestMethod.PUT, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody String update(@RequestBody Language language) {
        logger.info("update existing language "+language.getCode());
        Language savedLanguage = languageService.updateLanguage(language);
        return Long.toString(savedLanguage.getId());
    }

    @RequestMapping(value = "", method = RequestMethod.DELETE)
    public String delete(@RequestParam Long id, Model model) {
        logger.info("delete existing language "+id);
        languageService.removeLanguage(id);
        return "config/languages";
    }
}
