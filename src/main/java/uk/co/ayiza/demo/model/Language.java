package uk.co.ayiza.demo.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Locale;

/**
 * Created by rtai on 27/10/2017.
 */
@Entity
@XmlRootElement
@Table(name = "LANGUAGE")
public class Language {

    @Id @GeneratedValue
    @XmlElement
    @Column(name = "LANGUAGE_ID")
    private long id;

    @XmlElement
    @Column(name = "LANGUAGE_CODE")
    private String code;

    @XmlElement
    @Column(name = "LANGUAGE_TEXT")
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
