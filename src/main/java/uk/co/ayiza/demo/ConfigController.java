package uk.co.ayiza.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import uk.co.ayiza.demo.languages.LanguageService;

/**
 * Created by rtai on 15/11/2017.
 */
@Controller
@RequestMapping(value = "/configmgr")
public class ConfigController {

    private static final Logger logger = LoggerFactory.getLogger(ConfigController.class);

    private static String VIEW_LOG_MSG = "returning {} view";

    @Autowired
    private LanguageService languageService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String config() {
        logger.info(VIEW_LOG_MSG, "configmgr");
        return "configmgr";
    }

    @RequestMapping(value = "/globalconfig")
    public String globalconfig() {
        logger.info(VIEW_LOG_MSG, "config/globalconfig");
        return "config/globalconfig";
    }

}
