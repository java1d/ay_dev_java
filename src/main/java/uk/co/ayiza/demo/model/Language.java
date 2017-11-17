package uk.co.ayiza.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Locale;

/**
 * Created by rtai on 27/10/2017.
 */
@Entity
@XmlRootElement
public class Language {

    @Id @GeneratedValue
    @XmlElement
    private long id;

    @XmlElement
    private String code;

    @XmlElement
    private String text;

    private Language() {}

    public Language(Locale locale) {
        this.code = locale.getLanguage();
        this.text = locale.getDisplayLanguage();
    }

    public long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getText() {
        return text;
    }
}
